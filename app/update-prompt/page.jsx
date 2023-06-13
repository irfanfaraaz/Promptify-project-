"use client"

import {useState, useEffect} from 'react'
import { useRouter, useSearchParams } from 'next/navigation'
import Form from '@components/Form'


const EditPrompt = () => {
  const router = useRouter()
  const searchParams = useSearchParams()
  const promptId = searchParams.get('id')


  const [submitting, setSubmitting] = useState(false)  
  const [post, setpost] = useState({
    prompt: '',
    tag: '',
  })

  useEffect(() => {
    const getPromptDetails = async () => {
        const response = await fetch(`/api/prompt/${promptId}`)
        const { prompt, tag } = await response.json()
        setpost({ prompt, tag })
    }
    if(promptId) getPromptDetails() 
  }, [promptId])

  const updatePrompt = async (e) => {
    e.preventDefault()
    setSubmitting(true)

    if(!promptId) return alert('Prompt ID not found')

    try {
      const response = await fetch(`/api/prompt/${promptId}`,{
        method: 'PATCH',
        body: JSON.stringify({
          prompt: post.prompt,
          tag: post.tag,
        })
      })
      if (response.ok) {
        router.push('/')
      }

    } catch (error) {
      console.log(error)
    } finally {
      setSubmitting(false)
    }
  }

  return (
    <Form
        type="Edit"
        post={post}
        setpost={setpost}
        submitting={submitting}
        handleSubmit={updatePrompt}
    />
  )
}

export default EditPrompt