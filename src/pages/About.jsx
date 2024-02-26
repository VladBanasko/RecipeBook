import NavbarTile from "../components/NavbarTile"

const About = () => {
  return (
    <div>
      <h3 className='text-center '>About</h3>
      <p className="text-justify mt-2" > Welcome to our Recipe Search SPA (Single Page Application), where culinary inspiration meets convenience! Our intuitive and user-friendly interface allows you to explore a vast world of delectable recipes effortlessly. Powered by a robust <a href="https://rapidapi.com/apininjas/api/recipe-by-api-ninjas" className="underline-offset-4" >Recipes API</a>, our SPA enables you to search through an extensive database to discover a diverse array of culinary delights.

        Simply enter your desired a meal, and let our SPA work its magic. Within seconds, you'll receive a curated list of mouthwatering recipes, complete with detailed instructions and ingredient lists. Whether you're a seasoned chef or a kitchen novice, our Recipe Search SPA is designed to make your cooking experience enjoyable and stress-free.

        Say goodbye to endless recipe scrolling and hello to a streamlined culinary journey with our Recipe Search SPA – because finding the perfect recipe should be as delightful as savoring the dish itself!</p>
    </div>

  )
}
export default About