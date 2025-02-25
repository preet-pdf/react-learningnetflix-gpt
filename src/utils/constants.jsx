export const USER_AVATAR =
    "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABAAAAAQCAYAAAAf8/9hAAAACXBIWXMAAAsTAAALEwEAmpwYAAABq0lEQVR4nI2Q/StDURjHryI/+AP4h6YRteQXlNaEEop5aRbzNlOULRqiYZtdibzMptGdjdtQ1+7dSttdzVuyMcSikO3RQfNa537rU6fnnO+ncw5B/BOjXJRlVZa0Ofsqp6ge6dB8U34OITQWRWE2PVDtfaL0SaAnIbkzAfvaOr9VWVIGBJGGFbj6K+dQCZW/c7euTVB9sjGsgNXLA9+LcYcOGEMjRJY1Sd+4nMcKuDH58fliL4QW2iG01AGnLg3AjRF8ZDOwow1hrMA9WHESWGsDuDX94MjdCZua8jOsgBoqjZ96uv8I0IzSlt5jBa5piTF2OJD4LUAz14zEgBXYdeLMY48i+FsQ9rQG0R4hJAcr0tqIX526RcTXm2BWZTWE0DSNbOWwNlks6K4DBFrXT+xmY4s9Fk48bA/RJHN1TTtUcM62vEM7OoE8uIqhPbXFK/q3rLb4imf3Li+3owDvXDzDNuf84OLlYxYFMO1Fot0kV/SjXDXOZOgdR/5UGYN+I8ypVFvpKYHKzBTY+MdXoQIb//Dabvbmfb2dZHO1a7xZZ+NNQkBnuz7/4g3A47RKHclXnAAAAABJRU5ErkJggg==";


export const API_CONSTANTS = {
    method: "GET",
    headers: {
        accept: "application/json",
        Authorization: "Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiJkN2EyOGRlZTAzYWRlOGYzOTEzM2UxNGJjNjdlNDI0MSIsIm5iZiI6MTczNjA4OTQzNy4wMTcsInN1YiI6IjY3N2E5ZjVkYTZkZWYwMTExYTc0OWQ4NCIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ._bwgBK1MetRYYVzBa1zL8vCuKWp-sz3Eau1fYqufq9U"
    }

}

export const IMAGE_CDN_URL = "https://image.tmdb.org/t/p/w780";

export const OPENAI_API_KEY = import.meta.env.VITE_OPENAI_API_KEY

export const SUPPORTED_LANGUAGES = [
    { identifier: "en", name: "English" },
    { identifier: "hindi", name: "Hindi" },
    { identifier: "spanish", name: "Spanish" },
];

export const GPT_PROMPT = "just pass the name dont be sorry only names as i told you List the top 5 Netflix movies in a comma-separated format (example: movie1,movie2,movie3) without any additional text. movie should be category of "