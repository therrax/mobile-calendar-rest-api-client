## Mobile Calendar — Copilot / AI contributor guidance

These notes help an AI code assistant be immediately productive in this repository.

- Big picture
  - This package is a thin TypeScript/JS client for the Mobile Calendar Public REST API. The canonical API surface lives in `openapi.yaml` (OpenAPI 3.0). Changes to endpoints should be reconciled with that file.
  - Core runtime component: `src/client/MobileCalendarClient.ts` — holds all HTTP calls, config wiring, auth/token refresh and response -> model mapping.
  - Models live under `src/models/` and lightweight interfaces under `src/interfaces/`. `src/index.ts` exports the public surface used by consumers.

- Important patterns & conventions (do not change without care)
  - Configuration: `src/utils/ConfigManager.ts` is a singleton that reads env vars via `dotenv`. Use `ConfigManager.getInstance().getConfig()` when constructing or testing the client. Runtime env vars: `MC_CLIENT_ID`, `MC_CLIENT_SECRET`, `MC_BASE_URL`.
  - Authentication: `MobileCalendarClient` calls `/auth/token` directly (see login()), stores `accessToken`, `refreshToken` and `tokenExpiry`, and adds `Authorization: Bearer ...` in a request interceptor. When a 401 occurs, the response interceptor re-authenticates and retries the original request.
  - Error handling: use `src/utils/ErrorHandler.ts`. It converts axios errors into an `ApiError` (has `.status`, `.ruid`, `.originalError`). Prefer returning/throwing `ApiError` for consumer-facing errors.
  - Response mapping: most client methods map `response.data` into model instances, e.g. `getReservations()` returns objects created with `new Reservation(...)`. Keep that pattern for consistency.
  - Logger: `src/utils/Logger` is a singleton used for debug/info/warn messages inside the client. Keep log calls when adding features; tests often mock behavior and don't check logs.

- How tests & mocks are structured
  - Tests use Jest. They mock `axios` (`jest.mock('axios')`) and then mock `axios.create` to return a fake axios instance with `get/post/patch/delete` and `interceptors` hooks. See `tests/MobileCalendarClient.test.ts` for examples of how to mock login and API responses.
  - When adding tests for client methods, follow the same pattern: set `axios.create.mockReturnValue(mockInstance)` and control `mockInstance.get/post/...` resolved values.

- Developer workflows (commands you can run)
  - Build: `npm run build` (runs `tsc`, outputs to `dist/`).
  - Watch build: `npm run dev` (runs `tsc --watch`).
  - Tests: `npm test` (jest). For single-file or watch use `npm run test:watch`.
  - Examples: `npm run example` builds and runs example(s) with `dotenv` loaded — useful to smoke-check runtime behavior.

- When editing client methods
  - Add the HTTP call in `MobileCalendarClient` (use `this.axiosInstance.get/post/...`).
  - Map `response.data` into model instances when appropriate (see `getRooms`, `getPricing`, `getRates`).
  - Add/adjust interfaces in `src/interfaces/` and models in `src/models/` to match `openapi.yaml` shapes where possible.
  - Update `src/index.ts` exports if you expose a new model/type.

- Integration points & external dependencies
  - HTTP library: `axios` (see interceptors used for auth and retry logic).
  - Environment: `dotenv` (ConfigManager loads `.env`).
  - Date handling: `luxon` used in models/helpers.
  - Build/test: `typescript`, `ts-jest`, `jest`.

- Small examples (quick copy-paste)
  - Run tests locally: `npm test`
  - Mocking pattern in tests (refer `tests/MobileCalendarClient.test.ts`):
    - `jest.mock('axios')`
    - `axios.create.mockReturnValue(mockInstance)`
    - `axios.post.mockResolvedValue({ data: { access_token: 'x', expires_in: 3600, meta: { ruid: '...' } } })` for login

- Notes & gotchas discovered in code
  - `ConfigManager` constructor loads envs but does not validate until `setConfig()` or `isConfigValid()` is called; tests often pass an explicit config to avoid thrown errors.
  - Several files include Polish comments — be conservative about changing wording there; functional code is English-first (identifiers, exports).
  - The project maps responses into class instances (models). Keep that pattern to preserve helper methods like `Reservation.getNightsCount()`.

If anything here is unclear or you want more detail for a specific area (e.g., how models are structured, or a walkthrough for adding an endpoint + tests), tell me which part and I will expand or adjust the guidance.
