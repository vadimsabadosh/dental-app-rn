import { api } from "../utils/api";

export default {
  getOne: (id) => api.get(`/patients/${id}`),
  add: (data) => api.post("/patients", data),
  getAll: () => api.get("/patients"),
  delete: (id) => api.delete(`/patients/${id}`),
  update: (id) => api.patch(`/patients/${id}`),
};
