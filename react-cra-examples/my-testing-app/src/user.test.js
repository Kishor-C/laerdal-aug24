import axios from "axios";
import fetchUsers from "./users";

// module name that you want to mock
jest.mock("axios");

test("should fetch users", () => {
  const mockData = [{ name: "Kishor" }];
  // then(response=>response.data)
  const mockResponse = { data: mockData };
  // whenever axios.get() is called we get a response, but that response must
  // be the mock response that needs to be created, which is done below
  // whenever a get request is make we get a mockResponse
  axios.get.mockResolvedValue(mockResponse);
  return fetchUsers().then((data) => expect(data).toEqual(mockData));
});