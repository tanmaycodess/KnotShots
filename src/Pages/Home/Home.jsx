
import Story from '../../Components/Featured_story/Story'
import Introdution from '../../Components/Introdution/Intro'
import Footer from '../../Components/Footer/Footer'
import Testimony from '../../Components/Testomony/Testimoni'
import Header from '../../Header/Header'
function home() {
    return (
        <>
            <Header />
            <Introdution />
            <Story />
            <Testimony />
            <Footer />
        </>
    )
}

export default home
