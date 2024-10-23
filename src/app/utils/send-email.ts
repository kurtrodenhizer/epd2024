import { FormData } from "../ui/pages/ContactPage";

export function sendEmail(data: FormData) {
  const apiEndpoint = "/api/email";

  fetch(apiEndpoint, {
    method: "POST",
    body: JSON.stringify(data),
  })
    .then((res) => res.json())
    .then((response) => {
      alert(response.message);
    })
    .catch((err) => {
      alert(err);
    });
}

// export function mailChimp(data: FormData) {
//   console.log(data, data.email)
//   const apiEndpoint = "/api/addSubscription";

//   fetch(apiEndpoint, {
//     method: "POST",
//     body: JSON.stringify(data.email),
//     headers: { "Content-Type": "application/json" },
//   });
// }

// export async function mailChimp(data: { email: string }) {
//   const apiEndpoint = "/api/addSubscription";

//   try {
//     const response = await fetch(apiEndpoint, {
//       method: "POST",
//       body: JSON.stringify(data),
//       headers: { "Content-Type": "application/json" },
//     });

//     if (!response.ok) {
//       const error = await response.json();
//       throw new Error(error.error || "Failed to subscribe to Mailchimp");
//     }

//     const result = await response.json();
//     console.log("Mailchimp response:", result);
//   } catch (error) {
//     console.error("Mailchimp error:", error);
//   }
// }


export async function mailChimp(data: { email: string }) {
  const apiEndpoint = "/api/addSubscription";

  try {
    const response = await fetch(apiEndpoint, {
      method: "POST",
      body: JSON.stringify(data), // Send data as JSON
      headers: { "Content-Type": "application/json" },
    });

    if (!response.ok) {
      const error = await response.json();
      console.error("Mailchimp error:", error);
      throw new Error(error.error || 'Failed to subscribe to Mailchimp');
    }

    const result = await response.json();
    console.log('Mailchimp response:', result);
    
  } catch (error) {
    console.error('Error sending email to Mailchimp:', error);
  }
}