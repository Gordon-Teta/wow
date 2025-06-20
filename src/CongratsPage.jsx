import React, { useState } from 'react';
import Confetti from 'react-confetti';
import Typewriter from 'typewriter-effect';
import { motion } from 'framer-motion';
import { FaCarSide, FaHeart, FaFire } from 'react-icons/fa';
import ReactHowler from 'react-howler';

const CongratsPage = () => {
  const [revealed, setRevealed] = useState(false);

  return (
    <div className="relative min-h-screen flex items-center justify-center bg-black text-white overflow-hidden">
      {/* Music starts after reveal */}
      {revealed && (
        <ReactHowler src="/song.mp3" playing={true} loop={true} volume={0.5} />
      )}

      {/* Vignette overlay */}
      <div className="pointer-events-none absolute inset-0 z-10 bg-gradient-radial from-transparent via-transparent to-black opacity-70" />

      {/* Confetti on reveal */}
      {revealed && <Confetti numberOfPieces={300} recycle={false} />}

      {/* 🎁 Surprise Box View */}
      {!revealed ? (
        <motion.div
          initial={{ scale: 0 }}
          animate={{ scale: 1 }}
          transition={{ type: 'spring', stiffness: 100 }}
          onClick={() => setRevealed(true)}
          className="cursor-pointer z-20 flex flex-col items-center justify-center w-full h-screen bg-black"
        >
          <motion.div
            animate={{ scale: [1, 1.2, 1], rotate: [0, -10, 10, 0] }}
            transition={{ repeat: Infinity, duration: 2 }}
            className="text-[180px] md:text-[220px] leading-none"
          >
            🎁
          </motion.div>
          <p className="mt-10 text-white font-extrabold text-4xl md:text-6xl text-center drop-shadow-lg">
            TAP THE GIFT TO BEGIN THE CELEBRATION
          </p>
        </motion.div>
      ) : (
        // 🎉 Celebration View
        <motion.div
          initial={{ opacity: 0, y: 100 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1 }}
          className="relative z-20 max-w-3xl text-center px-4 py-10 rounded-2xl backdrop-blur-md bg-white/10 border border-white/20 shadow-2xl"
        >
          {/* Heading */}
          <motion.h1
            initial={{ scale: 0 }}
            animate={{ scale: 1 }}
            transition={{ type: 'spring', stiffness: 120 }}
            className="text-4xl md:text-5xl font-extrabold text-yellow-400 mb-6"
          >
            🎉 Congrats, Fam!
          </motion.h1>

          {/* Typewriter Text */}
          <div className="text-lg md:text-xl text-gray-200 mb-10">
            <Typewriter
              options={{
                strings: [
                  "Ready for epic road trips and unforgettable memories.",
                  "Your Toyota Low Rider is a true head-turner!",
                  "Every mile is now a moment worth celebrating. 🚘❤️"
                ],
                autoStart: true,
                loop: true,
                delay: 40,
              }}
            />
          </div>

          {/* Car Image */}
          <motion.div
            whileHover={{ scale: 1.05 }}
            className="mx-auto max-w-md border-4 border-yellow-500 rounded-xl overflow-hidden shadow-xl hover:shadow-yellow-400 transition-shadow duration-300"
          >
            <img
              src="/car.webp"
              alt="Toyota Low Rider"
              className="w-full object-cover"
            />
          </motion.div>
          <p className="text-sm text-gray-400 mt-2">This ride's built for legends! ✨</p>

          {/* Icons */}
          <div className="flex justify-center gap-6 text-yellow-400 text-3xl mt-10 animate-pulse">
            <FaCarSide />
            <FaHeart />
            <FaFire />
          </div>
        </motion.div>
      )}
    </div>
  );
};

export default CongratsPage;
