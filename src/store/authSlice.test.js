import authReducer, {
    setUser,
    setError,
    setLoading,
    clearLoading,
    clearError,
  } from "./authSlice";
  
  describe("authSlice reducer", () => {
    it("should handle setUser action", () => {
      const initialState = {
        user: null,
        error: null,
        isLoading: false,
      };
  
      const userPayload = { id: 1, username: "testuser" };
      const newState = authReducer(initialState, setUser(userPayload));
  
      expect(newState.user).toEqual(userPayload);
      expect(newState.error).toBeNull();
      expect(newState.isLoading).toBe(false);
    });
  
    it("should handle setError action", () => {
      const initialState = {
        user: null,
        error: null,
        isLoading: false,
      };
  
      const errorPayload = "This is an error";
      const newState = authReducer(initialState, setError(errorPayload));
  
      expect(newState.error).toEqual(errorPayload);
      expect(newState.user).toBeNull();
      expect(newState.isLoading).toBe(false);
    });
  
    it("should handle setLoading action", () => {
      const initialState = {
        user: null,
        error: null,
        isLoading: false,
      };
  
      const newState = authReducer(initialState, setLoading());
  
      expect(newState.isLoading).toBe(true);
      expect(newState.user).toBeNull();
      expect(newState.error).toBeNull();
    });
  
    it("should handle clearLoading action", () => {
      const initialState = {
        user: null,
        error: null,
        isLoading: true,
      };
  
      const newState = authReducer(initialState, clearLoading());
  
      expect(newState.isLoading).toBe(false);
      expect(newState.user).toBeNull();
      expect(newState.error).toBeNull();
    });
  
    it("should handle clearError action", () => {
      const initialState = {
        user: null,
        error: "This is an error",
        isLoading: false,
      };
  
      const newState = authReducer(initialState, clearError());
  
      expect(newState.error).toBeNull();
      expect(newState.user).toBeNull();
      expect(newState.isLoading).toBe(false);
    });
  });
  