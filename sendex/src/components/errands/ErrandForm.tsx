"use client"

/* eslint-disable no-unused-vars */
import React, { useEffect, useState } from 'react'
import { uploadImage } from '@/lib/storage'
import { useErrands } from '@/hooks/use-errands'

type Props = {
  initial?: any
  onDone?: (errand: any) => void
}

export default function ErrandForm({ initial, onDone }: Props) {
  const { createErrand, updateErrand } = useErrands()
  const [title, setTitle] = useState(initial?.title ?? '')
  const [description, setDescription] = useState(initial?.description ?? '')
  const [image, setImage] = useState<File | null>(null)
  const [loading, setLoading] = useState(false)

  useEffect(() => {
    if (initial) {
      setTitle(initial.title || '')
      setDescription(initial.description || '')
    }
  }, [initial])

  async function onSubmit(e: React.FormEvent) {
    e.preventDefault()
    setLoading(true)
    try {
      let imagePath = null
      if (image) {
        imagePath = await uploadImage(image)
      }
      if (initial?.id) {
        const updated = await updateErrand(initial.id, { title, description, images: imagePath ? [imagePath] : undefined })
        onDone?.(updated)
      } else {
        const created = await createErrand({ title, description, images: imagePath ? [imagePath] : [] })
        setTitle('')
        setDescription('')
        onDone?.(created)
      }
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
      <button disabled={loading} type="submit">{loading ? 'Saving…' : initial?.id ? 'Update errand' : 'Post errand'}</button>
    </form>
  )
}
