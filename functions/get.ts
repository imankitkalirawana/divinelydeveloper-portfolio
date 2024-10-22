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

export async function getProject(slug: string) {
  try {
    const res = await fetch(`${API_BASE_URL}/projects/slug/${slug}`, {
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

export async function getTestimonials() {
  try {
    const res = await fetch(`${API_BASE_URL}/testimonials`, {
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
