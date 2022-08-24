import { BASE_URL, API_KEY } from "@/config/marvelAPI.js";

const nextGroup = (_page, limit) => _page * limit;

export async function fetchCharacters(_page, limit, optionSearchParams = "") {
  const response = await fetch(
    `${BASE_URL}?limit=${limit}&offset=${nextGroup(
      _page,
      limit
    )}${optionSearchParams}&${API_KEY}`
  );
  const charactersRaw = await response.json();

  const hasMore = charactersRaw.data.total > nextGroup(_page, limit);

  const result = charactersRaw.data.results.map((character) => {
    return {
      id: character.id,
      name: character.name,
      description: character.description,
      src: character.thumbnail.path + "." + character.thumbnail.extension,
      modified: character.modified,
    };
  });

  return {
    results: result,
    totalElements: charactersRaw.data.total,
    hasMore: hasMore,
  };
}
