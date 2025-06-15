import Image from 'next/image';
import { SocialIcon } from 'react-social-icons'

export default function Header() {
    return (
        <>
        <div className="w-full flex justify-center py-2">
            <Image
                src="/HOA.png"
                width={900}    
                height={350}   
                alt="Screenshot of the HOA Monument."
                style={{ 
                    maxWidth: '100%',
                    height: 'auto'
                }}
                priority
            />
        </div>
        <div className="flex justify-center space-x-4 py-2">
            <SocialIcon url={"https://www.facebook.com/profile.php?id=61564446704590&mibextid=LQQJ4d"} />
            <SocialIcon url={"https://www.instagram.com/nsah_hoa?igsh=MWs0Z3F0cWx6NjIyZg=="} />
        </div>
        </>
    );
}