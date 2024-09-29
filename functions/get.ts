import { API_BASE_URL, isCaching } from "@/lib/config";

export async function getProjects() {
  try {
    const res = await fetch(`${API_BASE_URL}/projects`, {
      cache: isCaching ? "default" : "no-cache",
    });
    if (res.ok) {
      const json = await res.json();
      return json;
    }
  } catch (error) {
    console.error(error);
  }
}
