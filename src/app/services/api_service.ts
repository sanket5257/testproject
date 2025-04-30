class ApiService {
  readonly base_url: string = "http://192.168.1.222:4000";

  // get methods
  async getHotHiring() {
    const response = await fetch(`${this.base_url}/hot_hiring`, {
      method: "GET",
      headers: {
        "Content-Type": "application/json",
      },
      credentials: "include",
    });
    return response;
  }

  //post methods
  // async login(id: string, pw: string) {
  //   //use axios logic here
  // }
}

const apiService = new ApiService();

export default apiService;
