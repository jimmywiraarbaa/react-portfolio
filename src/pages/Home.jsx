// import React from 'react'
import Neon from '../assets/background-neon.mp4'
function Home() {
    return (
        <div>
            <div className="">
                <video className="absolute -z-20  w-full" autoPlay loop controls>
                    <source src={Neon} type="video/mp4" />
                </video>
                <div className="intro flex flex-col justify-center items-center h-screen p-10 overflow-y-scroll">
                    {[...Array(1500)].map((_, index) => (
                        <div key={index} className="flex flex-col justify-center items-center">
                            <h1 className="teks text-white -tracking-tighter"
                                style={{
                                    textShadow: '0 0 18px #0ea5e9',
                                    WebkitTextFillColor: 'transparent',
                                    WebkitTextStrokeWidth: '1px'
                                }}
                            >
                                CAP-Y GANG
                            </h1>
                            <p className="text-white text-3xl uppercase"
                                style={{
                                    textShadow: '0 0 18px #facc15'
                                }}
                            >
                                - FRONT-END // Cybernetix -
                            </p>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    )
}

export default Home