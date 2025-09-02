import { PROJECT_TITLE } from "~/lib/constants";

export async function GET() {
  const appUrl =
    process.env.NEXT_PUBLIC_URL ||
    `https://${process.env.VERCEL_PROJECT_PRODUCTION_URL}`;

  const config = {
    accountAssociation: {
      header:
        "eyJmaWQiOjg2OTk5OSwidHlwZSI6ImN1c3RvZHkiLCJrZXkiOiIweDc2ZDUwQjBFMTQ3OWE5QmEyYkQ5MzVGMUU5YTI3QzBjNjQ5QzhDMTIifQ",
      payload:
        "eyJkb21haW4iOiJzb3BoaWEtY2Vsb25mdC52ZXJjZWwuYXBwIn0",
      signature:
        "MHg0OWUyMzk1NmQ5MjM3MDFjNTBiZGE4NzljNTE0YWZjOGJjYzI3MjEyNzU1ZjZlNDBiYmJmYjljMmY0OTYwOTdlNTJlNzljZTE5NzdhMTIzNTBjMzY1YjEyNjMzOGI3MDcwOWFlZGQyZTNhZDU2MGFmOWU4ZjAyNTI4MzM0YTRiMTFj",
    },
    frame: {
      version: "1",
      name: PROJECT_TITLE,
      iconUrl: `${appUrl}/icon.png`,
      homeUrl: appUrl,
      imageUrl: `${appUrl}/og.png`,
      buttonTitle: "Open",
      webhookUrl: `${appUrl}/api/webhook`,
      splashImageUrl: `${appUrl}/splash.png`,
      splashBackgroundColor: "#555555",
      primaryCategory: "social",
    },
  };

  return Response.json(config);
}
