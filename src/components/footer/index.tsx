import Logo from "@/assets/Logo.png";

const Footer = () => {
  return (
    <footer className="bg-primary-100 py-16">
      <div className="justify-content mx-auto w-5/6 gap-16 md:flex">
        <div className="mt-16 basis-1/2 md:mt-0">
          <img alt="logo" src={Logo} />
          <p className="my-5">
          Transform your fitness journey at our gym. Whether you're a seasoned athlete or a beginner, our diverse range of equipment and expert trainers cater to all fitness levels. Join motivating group classes, sculpt your body in our weight room, and embrace a healthier, stronger you in our dynamic gym environment.
          </p>
          <p>© Evogym All Rights Reserved. <br/> Built by Israel Omole. Inspired by Edroh.</p>
        </div>
        <div className="mt-16 basis-1/4 md:mt-0">
          <h4 className="font-bold">Links</h4>
          <p className="my-5">Massa orci senectus</p>
          <p className="my-5">Et gravida id et etiam</p>
          <p>Ullamcorper vivamus</p>
        </div>
        <div className="mt-16 basis-1/4 md:mt-0">
          <h4 className="font-bold">Contact Us</h4>
          <p className="my-5">omolewayeolagd1997@gmail.com</p>
          <p>+234-9030038597</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;