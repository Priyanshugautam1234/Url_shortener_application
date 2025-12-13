import { getShortUrl } from "../dao/short_url.js"
import { createShortUrlWithoutUser, createShortUrlWithUser } from "../services/short_url.service.js"
import wrapAsync from "../utils/tryCatchWrapper.js"

export const createShortUrl = wrapAsync(async (req, res) => {
    const data = req.body
    let shortUrl
    if (req.user) {
        // Ensure slug is unique if provided
        if (data.slug) {
            const existing = await getShortUrl(data.slug)
            if (existing) throw new Error("Custom URL already taken")
        }
        shortUrl = await createShortUrlWithUser(data.url, req.user._id, data.slug)
    } else {
        if (data.slug) throw new Error("Login required for custom URLs")
        shortUrl = await createShortUrlWithoutUser(data.url)
    }
    res.status(200).json({ shortUrl: process.env.APP_URL + shortUrl })
})


export const redirectFromShortUrl = wrapAsync(async (req, res) => {
    const { id } = req.params
    const url = await getShortUrl(id)
    if (!url) throw new Error("Short URL not found")
    res.redirect(url.full_url)
})

export const createCustomShortUrl = wrapAsync(async (req, res) => {
    const { url, slug } = req.body
    const shortUrl = await createShortUrlWithoutUser(url, customUrl)
    res.status(200).json({ shortUrl: process.env.APP_URL + shortUrl })
})