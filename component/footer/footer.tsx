import {
    Footer,
    FooterBrand,
    FooterCopyright,
    FooterDivider,
    FooterIcon,
    FooterLink,
    FooterLinkGroup,
    FooterTitle,
} from 'flowbite-react';
export default function FooterComponent() {
    return (
            <Footer className="container mx-auto w-fu">
                <div className="w-full">
                    <div className="grid w-full justify-between sm:flex sm:justify-between md:flex md:grid-cols-1">
                        <div>
                            <FooterBrand
                                href="https://flowbite.com"
                                src="favicon.ico"
                                alt="Flowbite Logo"
                                className=''
                            />
                            <p className='text-black'>Start your IT career with CSTAD</p>
                        </div>

                        <div>
                            <FooterTitle className="text-black" title="about"/>
                            <FooterLinkGroup col className='text-black'>
                                <FooterLink href="#">Flowbite</FooterLink>
                                <FooterLink href="#">Tailwind CSS</FooterLink>
                            </FooterLinkGroup>
                        </div>
                        <div>
                            <FooterTitle className="text-wtext-black" title="Follow us"/>
                            <FooterLinkGroup col className='text-black'>
                                <FooterLink href="#">Github</FooterLink>
                                <FooterLink href="#">Discord</FooterLink>
                            </FooterLinkGroup>
                        </div>
                        <div>
                            <FooterTitle className="text-wtext-black" title="Legal"/>
                            <FooterLinkGroup col className='text-black'>
                                <FooterLink href="#">Privacy Policy</FooterLink>
                                <FooterLink href="#">Terms &amp; Conditions</FooterLink>
                            </FooterLinkGroup>
                        </div>

                    </div>
                    <FooterDivider/>
                    <div className="w-full grid place-content-center sm:items-center">

                        <FooterCopyright className="text-black"
                                         by="Center of Science and Technology Advanced Development | All Rights Reserved™"
                                         year={2022}/>
                    </div>
                </div>
            </Footer>
    
    );
}