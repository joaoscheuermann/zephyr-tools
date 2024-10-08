/* eslint-disable perfectionist/sort-objects */

import { ZephyrPagination } from "../../types/index.js"
import { json } from "../../utils/index.js";

export const fetchAllRegisters = async <T>(request: (startAt: number, maxResults: number) => Promise<Response>, startAt: number, maxResults: number) => {
  const results: T[] = []

  let currentStartAt = startAt;

  // Infinite looooooooooooooooop :D
  for (;;) {
    // eslint-disable-next-line no-await-in-loop
    const response = await json<ZephyrPagination<T>>(() => request(currentStartAt, maxResults))

    results.push(...response.values)

    if (response.isLast) {
      break
    }

    currentStartAt += maxResults
  }

  return results
}

export const getProject = (token: string, key: string) => fetch(
  `https://api.zephyrscale.smartbear.com/v2/projects/${key}`,
  {
    method: 'GET',
    headers: {
      'Authorization': `Bearer ${token}`,
    }
  })

export const getFolders = (token: string, key: string, startAt: number | string = 0, maxResults: number | string = 10) => fetch(
  `https://api.zephyrscale.smartbear.com/v2/folders?projectKey=${key}&startAt=${startAt}&maxResults=${maxResults}`,
  {
    method: 'GET',
    headers: {
      'Authorization': `Bearer ${token}`,
    }
  })