import Link from "next/link"

const Form = ({type, post, setpost, submitting, handleSubmit }) => {
  return (
    <section className="w-full max-w-full fex-start flex-col">
      <h1 className="head_text text-left">
        <span className="blue_gradient">{type} Post </span>
      </h1>
      <p className="desc text-left max-w-md">
        {type} a post to the community, and et your imagination run wild with any AI-powered platform.
      </p>
      <form 
        onSubmit={handleSubmit}
        className="mt-10 w-fullmax-w-2xl fex flex-col gap-7 glassmorphism" >
          <label htmlFor="">
            <span className="font-satoshi font-semibold text-base text-gray-700">
              Your AI prompt
            </span>

            <textarea 
              value={post.prompt}
              onChange={(e) => setpost({...post, prompt: e.target.value})}
              placeholder="Enter your prompt here"
              required
              className="form_textarea"
            />

          </label>
          <label htmlFor="">
            <span className="font-satoshi font-semibold text-base text-gray-700">
              Tag{' '}
              <span className="font-normal">(#product, #idea, #coding)</span>
            </span>

            <input 
              value={post.tag}
              onChange={(e) => setpost({...post, tag: e.target.value})}
              placeholder="#tag"
              required
              className="form_input"
            />
          </label>

          <div className="flex-end mx-3  mb-5 gap-4">
            <Link href="/" className="text-gray-500 text-sm">
              Cancel
            </Link>

            <button 
              type="submit" 
              disabled={submitting}
              className="px-5 py-1.5 text-sm  bg-primary-orange rounded-full text-white"
              >
              {submitting ? `${type}...`:type}
            </button>
          </div>

        </form>
    </section>
  )
}

export default Form