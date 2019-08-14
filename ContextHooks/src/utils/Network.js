export async function requestEndPoint(endPoint, errorMessage) {
  let response;
  let responseJson = {};
  try {
    response = await fetch(endPoint);
    if (response.ok) {
      responseJson = await response.json();
    } else {
      throw new Error();
    }
  } catch (e) {
    throw new Error(errorMessage);
  }
  return responseJson;

}
