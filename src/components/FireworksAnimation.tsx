import React from 'react';

export const FireworksAnimation: React.FC = () => {
  return (
    <>
      <div className="fixed left-0 top-0 w-24 h-full pointer-events-none">
        <div className="animate-firework-left absolute w-4 h-4 bg-yellow-500 rounded-full opacity-0" 
          style={{ 
            boxShadow: '0 0 20px 8px rgba(255, 200, 0, 0.8), 0 0 40px 12px rgba(255, 100, 0, 0.6)',
            filter: 'blur(0.5px)'
          }}>
          <div className="absolute -left-2 -top-2 w-8 h-8 animate-sparkle">
            <div className="w-1 h-1 bg-yellow-300 rounded-full absolute top-0 left-1/2"></div>
            <div className="w-1 h-1 bg-yellow-300 rounded-full absolute bottom-0 left-1/2"></div>
            <div className="w-1 h-1 bg-yellow-300 rounded-full absolute left-0 top-1/2"></div>
            <div className="w-1 h-1 bg-yellow-300 rounded-full absolute right-0 top-1/2"></div>
          </div>
          <div className="absolute -left-4 -top-4 w-12 h-12 animate-star">
            <div className="star-shape absolute inset-0 bg-yellow-400"
              style={{
                clipPath: 'polygon(50% 0%, 61% 35%, 98% 35%, 68% 57%, 79% 91%, 50% 70%, 21% 91%, 32% 57%, 2% 35%, 39% 35%)'
              }}>
            </div>
          </div>
        </div>

        <div className="animate-firework-left-delayed absolute w-4 h-4 bg-purple-500 rounded-full opacity-0" 
          style={{ 
            boxShadow: '0 0 20px 8px rgba(147, 51, 234, 0.8), 0 0 40px 12px rgba(168, 85, 247, 0.6)',
            filter: 'blur(0.5px)'
          }}>
          <div className="absolute -left-2 -top-2 w-8 h-8 animate-sparkle">
            <div className="w-1 h-1 bg-purple-300 rounded-full absolute top-0 left-1/2"></div>
            <div className="w-1 h-1 bg-purple-300 rounded-full absolute bottom-0 left-1/2"></div>
            <div className="w-1 h-1 bg-purple-300 rounded-full absolute left-0 top-1/2"></div>
            <div className="w-1 h-1 bg-purple-300 rounded-full absolute right-0 top-1/2"></div>
          </div>
          <div className="absolute -left-3 -top-3 w-10 h-10 animate-lightning">
            <div className="lightning-shape absolute inset-0 bg-purple-300"
              style={{
                clipPath: 'polygon(50% 0%, 0% 100%, 50% 65%, 100% 100%)'
              }}>
            </div>
          </div>
        </div>
      </div>

      <div className="fixed right-0 top-0 w-24 h-full pointer-events-none">
        <div className="animate-firework-right absolute w-4 h-4 bg-pink-500 rounded-full opacity-0" 
          style={{ 
            boxShadow: '0 0 20px 8px rgba(236, 72, 153, 0.8), 0 0 40px 12px rgba(219, 39, 119, 0.6)',
            filter: 'blur(0.5px)'
          }}>
          <div className="absolute -left-2 -top-2 w-8 h-8 animate-sparkle">
            <div className="w-1 h-1 bg-pink-300 rounded-full absolute top-0 left-1/2"></div>
            <div className="w-1 h-1 bg-pink-300 rounded-full absolute bottom-0 left-1/2"></div>
            <div className="w-1 h-1 bg-pink-300 rounded-full absolute left-0 top-1/2"></div>
            <div className="w-1 h-1 bg-pink-300 rounded-full absolute right-0 top-1/2"></div>
          </div>
          <div className="absolute -left-4 -top-4 w-12 h-12 animate-star">
            <div className="star-shape absolute inset-0 bg-pink-400"
              style={{
                clipPath: 'polygon(50% 0%, 61% 35%, 98% 35%, 68% 57%, 79% 91%, 50% 70%, 21% 91%, 32% 57%, 2% 35%, 39% 35%)'
              }}>
            </div>
          </div>
        </div>

        <div className="animate-firework-right-delayed absolute w-4 h-4 bg-blue-500 rounded-full opacity-0" 
          style={{ 
            boxShadow: '0 0 20px 8px rgba(59, 130, 246, 0.8), 0 0 40px 12px rgba(37, 99, 235, 0.6)',
            filter: 'blur(0.5px)'
          }}>
          <div className="absolute -left-2 -top-2 w-8 h-8 animate-sparkle">
            <div className="w-1 h-1 bg-blue-300 rounded-full absolute top-0 left-1/2"></div>
            <div className="w-1 h-1 bg-blue-300 rounded-full absolute bottom-0 left-1/2"></div>
            <div className="w-1 h-1 bg-blue-300 rounded-full absolute left-0 top-1/2"></div>
            <div className="w-1 h-1 bg-blue-300 rounded-full absolute right-0 top-1/2"></div>
          </div>
          <div className="absolute -left-3 -top-3 w-10 h-10 animate-lightning">
            <div className="lightning-shape absolute inset-0 bg-blue-300"
              style={{
                clipPath: 'polygon(50% 0%, 0% 100%, 50% 65%, 100% 100%)'
              }}>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};