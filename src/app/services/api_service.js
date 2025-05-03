import axios from "axios";

class ApiService {
   base_url = "https://api.textilevoice.com";
  
  

  constructor() {
    this.axiosInstance = axios.create({
      baseURL: this.base_url,
      withCredentials: true,
      headers: {
        "Content-Type": "application/json",
      },
    });

    // <-- Here: add interceptor to attach token
    this.axiosInstance.interceptors.request.use(
      (config) => {
        const token = localStorage.getItem("token"); 
        if (token && config.headers) {
          config.headers["Authorization"] = `Bearer ${token}`;
        }
        return config;
      },
      (error) => Promise.reject(error)
    );
  }


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
  async login(email, password ) {
    return await this.axiosInstance.post("/login", { email , password });
  }
  async jobBasedOnApplies() {
    return await this.axiosInstance.post("/job_based_on_applies");
  }

  
}

const apiService = new ApiService();

export default apiService;

