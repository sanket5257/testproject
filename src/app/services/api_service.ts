import axios from "axios";

class ApiService {
  readonly base_url: string = "http://192.168.1.222:4000";
  private axiosInstance = axios.create({
    baseURL: this.base_url,
    withCredentials: true,
    headers: {
      "Content-Type": "application/json",
    },
  });

  // GET methods
  async getHotHiring() {
    return await this.axiosInstance.get("/hot_hiring");
  }

  async getTopCompanies() {
    return await this.axiosInstance.get("/top_companies");
  }

  async getUpComingExhibition() {
    return await this.axiosInstance.get("/upcoming_exhibition");
  }

  async getStudentsPlaced() {
    return await this.axiosInstance.get("/students_placed");
  }

  async getMajorCities() {
    return await this.axiosInstance.get("/major_cities");
  }
  async getTieUpInstitute() {
    return await this.axiosInstance.get("/tie_up_institute");
  }

  // POST methods (example)
  async login(email: string, password: string) {
    return await this.axiosInstance.post("/login", { email , password });
  }

  
}

const apiService = new ApiService();

export default apiService;

