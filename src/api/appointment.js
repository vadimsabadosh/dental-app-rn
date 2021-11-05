import { api } from "../utils/api";
export default {
  getAll: () => api.get("/appointments"),
  delete: (id) => api.delete(`/appointments/${id}`),
  update: (id) => api.patch(`/appointments/${id}`),
  add: (data) => api.post("/appointments", data),
};
