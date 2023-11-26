import Feed from '@components/Feed';

const Home = () => {
  return (
    <section className="w-full flex-center flex-col">
      <h1 className="head_text text-center">Discover and Share <br className="max-md:hidden" />  <span className="orange_gradient text-center">Ai-Powered Prompts</span></h1>
      <p className="desc text-center">
      "Empower your creativity with Discover and Share Ai-Powered Prompts. Unleash endless inspiration as our AI generates prompts for writing, brainstorming, and more. Fuel your imagination today!"
      </p>

      <Feed></Feed>
    </section>
  )
}

export default Home
