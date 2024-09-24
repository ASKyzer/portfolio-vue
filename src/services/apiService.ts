export const fetchQuote = async (apiKey: string, category: string) => {
  const response = await fetch(
    `https://api.everxp.com/heading/quote?api_key=${apiKey}&quote=${category}&lang=en`
  );
  if (!response.ok) {
    throw new Error(`HTTP error! status: ${response.status}`);
  }
  return response.json();
};

export const submitForm = async (formData: FormData) => {
  const response = await fetch('/', {
    method: 'POST',
    headers: { 'Content-Type': 'application/x-www-form-urlencoded' },
    body: new URLSearchParams(formData as any).toString()
  });
  return response;
};
