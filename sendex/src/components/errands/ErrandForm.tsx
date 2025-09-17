"use client"

import React, { useState } from 'react'
import { apiPost } from '@/lib/api'
import { uploadImage } from '@/lib/storage'

export default function ErrandForm() {
  const [title, setTitle] = useState('')
  const [description, setDescription] = useState('')
  const [image, setImage] = useState<File | null>(null)
  const [loading, setLoading] = useState(false)

  async function onSubmit(e: React.FormEvent) {
    e.preventDefault()
    setLoading(true)
    try {
      let imagePath = null
      if (image) {
        imagePath = await uploadImage(image)
      }
      const res = await apiPost('errands', { title, description, images: imagePath ? [imagePath] : [] })
      console.log('Created errand', res)
    } catch (err) {
      console.error(err)
    } finally {
      setLoading(false)
    }
  }

  return (
    <form onSubmit={onSubmit} className="space-y-4">
      <input value={title} onChange={(e) => setTitle(e.target.value)} placeholder="Title" />
      <textarea value={description} onChange={(e) => setDescription(e.target.value)} placeholder="Description" />
      <input type="file" onChange={(e) => setImage(e.target.files?.[0] ?? null)} />
      <button disabled={loading} type="submit">{loading ? 'Posting…' : 'Post errand'}</button>
    </form>
  )
}
