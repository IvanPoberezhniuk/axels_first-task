const URL = 'https://boiling-refuge-66454.herokuapp.com';

interface HttpResponse<T> extends Response {
  parsedBody?: T;
}

export async function http<T>(url: string): Promise<T> {
  const response: HttpResponse<T> = await fetch(`${URL}${url}`);

  return response.json();
}
