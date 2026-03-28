import footerBeans from '../assets/images/footer-bg.png';
import leftImg from '../assets/images/subscribe-left-img.png';
import rightImg from '../assets/images/subscribe-right-img.png';

const Footer = () => {
    return (
        <footer className="text-white pt-30 pb-20 px-4 md:px-12 lg:px-24 relative" style={{ backgroundImage: `url(${footerBeans})`, backgroundSize: 'cover', backgroundPosition: 'center' }}>
            {/* coffee images */}
            <div className="absolute z-30 left-0 -top-50 mb-8 hidden lg:block">
                <img src={leftImg} alt="coffee" className="w-[90%]" />
            </div>

            <div className="absolute z-30 right-0 top-100 min-[550px]:top-0 lg:-top-50 mb-8 ">
                <img src={rightImg} alt="coffee" className="" />
            </div>

            <div className="max-w-7xl mx-auto flex flex-col lg:flex-row md:justify-between gap-10 md:gap-20 relative z-10">
                {/* Logo, descripti`n, social */}
                <div className="lg:w-1/4 mb-8 md:mb-0">
                    <div className="logo-name text-5xl mb-2">Bean Scene</div>
                    <p className="mb-4 common-text opacity-90 max-w-xs mt-8">
                        Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.
                    </p>
                    <div className="flex gap-3 mt-2">
                        <a href="#" className="w-8 h-8 flex items-center justify-center rounded-full bg-white/10 hover:bg-white/20 transition"><i className="fab fa-facebook-f"></i></a>
                        <a href="#" className="w-8 h-8 flex items-center justify-center rounded-full bg-white/10 hover:bg-white/20 transition"><i className="fab fa-instagram"></i></a>
                        <a href="#" className="w-8 h-8 flex items-center justify-center rounded-full bg-white/10 hover:bg-white/20 transition"><i className="fab fa-youtube"></i></a>
                        <a href="#" className="w-8 h-8 flex items-center justify-center rounded-full bg-white/10 hover:bg-white/20 transition"><i className="fab fa-twitter"></i></a>
                    </div>
                </div>
                {/* Links */}
                <div className="flex-1 grid grid-cols-1 sm:grid-cols-3 md:grid-cols-3 gap-8">
                    <div>
                        <div className="font-semibold mb-3 text-xl">About</div>
                        <ul className="space-y-2 common-text opacity-90 mt-10">
                            <li><a href="#" className="hover:underline">Menu</a></li>
                            <li><a href="#" className="hover:underline">Features</a></li>
                            <li><a href="#" className="hover:underline">News & Blogs</a></li>
                            <li><a href="#" className="hover:underline">Help & Supports</a></li>
                        </ul>
                    </div>
                    <div>
                        <div className="font-semibold mb-3 text-xl">Company</div>
                        <ul className="space-y-2 common-text opacity-90 mt-10">
                            <li><a href="#" className="hover:underline">How we work</a></li>
                            <li><a href="#" className="hover:underline">Terms of service</a></li>
                            <li><a href="#" className="hover:underline">Pricing</a></li>
                            <li><a href="#" className="hover:underline">FAQ</a></li>
                        </ul>
                    </div>
                    <div>
                        <div className="font-semibold mb-3 text-xl">Contact Us</div>
                        <ul className="space-y-2 common-text opacity-90 mt-10">
                            <li>Ashiya Nagar 1st Block,<br /> Ram nagar, Bangalore-560016</li>
                            <li>+1 202-918-2132</li>
                            <li>beanscene@mail.com</li>
                            <li>www.beanscene.com</li>
                        </ul>
                    </div>
                </div>
            </div>
        </footer>
    );
};

export default Footer;