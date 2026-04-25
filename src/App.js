import React, { useEffect, useRef, useState } from "react";
            </div>
          ))}
        </section>
      </Reveal>

      <section className="max-w-7xl mx-auto px-6 pb-24">
        <div className="gradient rounded-[40px] p-14 text-center relative overflow-hidden">
          <h2 className="text-5xl font-black">Қазір бастау</h2>

          <p className="mt-4 text-white/80">
            Email енгізіп, тегін материал ал.
          </p>

          <div className="mt-8 flex flex-col md:flex-row gap-4 justify-center max-w-xl mx-auto">
            <input
              type="email"
              placeholder="Email"
              className="flex-1 px-6 py-4 rounded-2xl text-black outline-none"
            />

            <button className="bg-black px-8 py-4 rounded-2xl">
              Жіберу
            </button>
          </div>
        </div>
      </section>

      <footer className="border-t border-white/10 py-16 px-6">
        <div className="max-w-7xl mx-auto grid md:grid-cols-4 gap-10">
          <div>
            <div className="flex items-center gap-2 text-2xl font-bold">
              <BookOpen /> EduPro
            </div>

            <p className="mt-4 text-gray-500">
              Заманауи онлайн білім платформасы.
            </p>
          </div>

          <div>
            <h4 className="font-bold mb-4">Платформа</h4>
            <div className="space-y-2 text-gray-500">
              <p>Курстар</p>
              <p>Бағалар</p>
              <p>FAQ</p>
            </div>
          </div>

          <div>
            <h4 className="font-bold mb-4">Компания</h4>
            <div className="space-y-2 text-gray-500">
              <p>Біз туралы</p>
              <p>Блог</p>
              <p>Контакт</p>
            </div>
          </div>

          <div>
            <h4 className="font-bold mb-4">Әлеуметтік желі</h4>
            <div className="flex gap-4 text-gray-400">
              <Github />
              <Instagram />
              <Linkedin />
              <Twitter />
            </div>
          </div>
        </div>

        <div className="text-center text-gray-600 mt-16">
          © 2026 EduPro. All rights reserved.
        </div>
      </footer>
    </div>
  );
}
