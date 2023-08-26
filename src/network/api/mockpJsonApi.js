import NetworkCall from "../networkCall";
import MockRequest from "../request/mockJsonRequest";
export const getMockApi = async (reqBody) => {
  try {
    let data = await NetworkCall.fetch(MockRequest.getData(), false);
    console.log("daat ", data);
    return data;
  } catch (error) {
    return error;
  }
};
