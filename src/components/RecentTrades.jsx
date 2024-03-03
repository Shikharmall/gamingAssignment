import React from "react";
import Win from "../image/win.png";
import Loss from "../image/loss.png";
import Fair from "../image/fair.png";

export default function RecentTrades() {
  return (
    <div class="flex max-w-full flex-col items-center gap-8 mx-20">
      <h1 class="max-w-[700px] text-4xl font-bold">
        Recent trades from our community
      </h1>
      <div class="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 grid-rows-4 sm:grid-rows-2 lg:grid-rows-1 gap-4 w-full">
        <div class="rounded-lg border bg-card text-card-foreground shadow-sm col-span-1 flex flex-col h-full overflow-hidden relative">
          <div class="flex flex-col space-y-1.5 p-6">
            <div class="flex items-center gap-4">
              <div class="relative isolate">
                <div class="relative isolate">
                  <div class="absolute -bottom-1 -left-1 h-5 w-5 bg-muted-foreground rounded-full z-50 border-background border-4 !bg-green-500"></div>{" "}
                  <span class="relative flex shrink-0 overflow-hidden rounded-full w-12 h-12">
                    <img
                      class="h-full w-full aspect-square"
                      alt="IIIIIlllllllIlllIl"
                      src="https://tr.rbxcdn.com/30DAY-AvatarHeadshot-E203EE8B9BC3D00073E01F5527CF391B-Png/150/150/AvatarHeadshot/Png/noFilter"
                    />
                  </span>
                </div>
              </div>
              <div>
                <h3 class="text-lg font-semibold leading-none tracking-tight">
                  <div class="flex flex-col items-start gap-1">
                    <a data-state="closed">
                      <span
                        user="[object Object]"
                        type="SMALL"
                        class="truncate w-[50%] text-sm hover:cursor-pointer select-none text-primary"
                      >
                        @IIIIIlllllllIlllIl
                        <div class="inline-flex"></div>
                      </span>
                    </a>
                    <span class="text-green-600 text-xs">
                      +0<span class="text-muted-foreground"> /</span>
                      <span class="text-red-500">-0</span>
                    </span>
                  </div>
                </h3>
                <p class="text-sm text-muted-foreground">a few seconds ago</p>
              </div>
            </div>
          </div>
          <div class="p-6 pt-0">
            <div class="flex flex-col gap-4 max-w-full">
              <div class="flex flex-col gap-x-2 max-w-full mb-4">
                <p class="text-md font-medium leading-none mb-2">Offer</p>
                <div class="grid grid-cols-4 lg:grid-cols-4 items-center gap-x-2 h-14">
                  <div class="relative">
                    <button data-state="closed">
                      <div class="aspect-square rounded-xl flex justify-center items-center h-14">
                        <img
                          class="h-full object-contain object-center rounded-xl"
                          src="https://images.zap.gg/file/zap-assets/blox-fruits/gamepasses/dark-blade.png"
                          alt="Dark Blade"
                        />
                      </div>
                    </button>
                  </div>
                </div>
              </div>
              <div
                data-orientation="horizontal"
                role="none"
                class="shrink-0 bg-border h-[1px] w-full mt-1"
              ></div>
              <div class="flex flex-col">
                <p class="text-md font-medium leading-none mb-2">Request</p>
                <div class="full bg-[#f1f5f9] p-4 rounded-md text-center text-md mb-4">
                  Looking for offers
                </div>
              </div>
            </div>
          </div>
          <div class="items-center p-6 pt-0 mt-auto w-full flex flex-col">
            <div class="flex flex-col w-full mb-4">
              <p class="text-xs font-medium">Trade Ratings</p>
              <div class="flex mt-2">
                <div class="flex justify-center items-center px-3 py-1 bg-[#f1f5f9] rounded-full gap-x-2 hover:cursor-pointer">
                  <img src={Win} alt="logo" class="h-4 w-4" />
                  <div class="font-bold">0</div>
                </div>
                <div class="flex justify-center items-center px-3 py-1 bg-[#f1f5f9] rounded-full gap-x-2 ml-2 hover:cursor-pointer">
                  <img src={Fair} alt="Neutral" class="h-4 w-4" />
                  <div class="font-bold">0</div>
                </div>
                <div class="flex justify-center items-center px-3 py-1 bg-[#f1f5f9] rounded-full gap-x-2 ml-2 hover:cursor-pointer ">
                  <img src={Loss} alt="Negative" class="h-4 w-4" />
                  <div class="font-bold">0</div>
                </div>
              </div>
            </div>
            <button
              type="button"
              aria-haspopup="dialog"
              aria-expanded="false"
              aria-controls="radix-:r5o:"
              data-state="closed"
              class="w-full"
            >
              <button class="inline-flex items-center justify-center rounded-md text-sm font-medium transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:opacity-50 disabled:pointer-events-none ring-offset-background bg-primary text-primary-foreground hover:bg-primary/90 h-10 py-2 px-4 w-full bg-[#1c1c1c] text-white">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="24"
                  height="24"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  stroke-width="2"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  class="mr-2 h-4 w-4"
                >
                  <path d="M2 12s3-7 10-7 10 7 10 7-3 7-10 7-10-7-10-7Z"></path>
                  <circle cx="12" cy="12" r="3"></circle>
                </svg>{" "}
                Quick View
              </button>
            </button>
          </div>
        </div>
        <div class="rounded-lg border bg-card text-card-foreground shadow-sm col-span-1 flex flex-col h-full overflow-hidden relative">
          <div class="flex flex-col space-y-1.5 p-6">
            <div class="flex items-center gap-4">
              <div class="relative isolate">
                <div class="relative isolate">
                  <div class="absolute -bottom-1 -left-1 h-5 w-5 bg-muted-foreground rounded-full z-50 border-background border-4 !bg-red-500"></div>{" "}
                  <span class="relative flex shrink-0 overflow-hidden rounded-full w-12 h-12">
                    <img
                      class="h-full w-full aspect-square"
                      alt="charaspowerlh"
                      src="https://tr.rbxcdn.com/30DAY-AvatarHeadshot-95A3E980FE57BBB0DA0DE16A60DFD405-Png/150/150/AvatarHeadshot/Png/noFilter"
                    />
                  </span>
                </div>
              </div>
              <div>
                <h3 class="text-lg font-semibold leading-none tracking-tight">
                  <div class="flex flex-col items-start gap-1">
                    <a data-state="closed">
                      <span
                        user="[object Object]"
                        type="SMALL"
                        class="truncate w-[50%] text-sm hover:cursor-pointer select-none text-primary"
                      >
                        @charaspowerlh
                        <div class="inline-flex"></div>
                      </span>
                    </a>
                    <span class="text-green-600 text-xs">
                      +0<span class="text-muted-foreground"> /</span>
                      <span class="text-red-500">-0</span>
                    </span>
                  </div>
                </h3>
                <p class="text-sm text-muted-foreground">a few seconds ago</p>
              </div>
            </div>
          </div>
          <div class="p-6 pt-0">
            <div class="flex flex-col gap-4 max-w-full">
              <div class="flex flex-col gap-x-2 max-w-full mb-4">
                <p class="text-md font-medium leading-none mb-2">Offer</p>
                <div class="grid grid-cols-4 lg:grid-cols-4 items-center gap-x-2 h-14">
                  <div class="relative">
                    <button data-state="closed">
                      <div class="aspect-square rounded-xl flex justify-center items-center h-14">
                        <img
                          class="h-full object-contain object-center rounded-xl"
                          src="https://images.zap.gg/file/zap-assets/blox-fruits/rumble.png"
                          alt="Rumble"
                        />
                      </div>
                    </button>
                  </div>
                  <div class="relative">
                    <button data-state="closed">
                      <div class="aspect-square rounded-xl flex justify-center items-center h-14">
                        <img
                          class="h-full object-contain object-center rounded-xl"
                          src="https://images.zap.gg/file/zap-assets/blox-fruits/dough.png"
                          alt="Dough"
                        />
                      </div>
                    </button>
                  </div>
                  <div class="relative">
                    <button data-state="closed">
                      <div class="aspect-square rounded-xl flex justify-center items-center h-14">
                        <img
                          class="h-full object-contain object-center rounded-xl"
                          src="https://images.zap.gg/file/zap-assets/blox-fruits/venom.png"
                          alt="Venom"
                        />
                      </div>
                    </button>
                  </div>
                  <div class="relative">
                    <button data-state="closed">
                      <div class="aspect-square rounded-xl flex justify-center items-center h-14">
                        <img
                          class="h-full object-contain object-center rounded-xl"
                          src="https://images.zap.gg/file/zap-assets/blox-fruits/leopard.png"
                          alt="Leopard"
                        />
                      </div>
                    </button>
                  </div>
                </div>
              </div>
              <div
                data-orientation="horizontal"
                role="none"
                class="shrink-0 bg-border h-[1px] w-full mt-1"
              ></div>
              <div class="flex flex-col">
                <p class="text-md font-medium leading-none mb-2">Request</p>
                <div class="full bg-[#f1f5f9] p-4 rounded-md text-center text-md mb-4">
                  Looking for offers
                </div>
              </div>
            </div>
          </div>
          <div class="items-center p-6 pt-0 mt-auto w-full flex flex-col">
            <div class="flex flex-col w-full mb-4">
              <p class="text-xs font-medium">Trade Ratings</p>
              <div class="flex mt-2">
                <div class="flex justify-center items-center px-3 py-1 bg-[#f1f5f9] rounded-full gap-x-2 hover:cursor-pointer">
                  <img src={Win} alt="logo" class="h-4 w-4" />
                  <div class="font-bold">0</div>
                </div>
                <div class="flex justify-center items-center px-3 py-1 bg-[#f1f5f9] rounded-full gap-x-2 ml-2 hover:cursor-pointer">
                  <img src={Fair} alt="Neutral" class="h-4 w-4" />
                  <div class="font-bold">0</div>
                </div>
                <div class="flex justify-center items-center px-3 py-1 bg-[#f1f5f9] rounded-full gap-x-2 ml-2 hover:cursor-pointer ">
                  <img src={Loss} alt="Negative" class="h-4 w-4" />
                  <div class="font-bold">0</div>
                </div>
              </div>
            </div>
            <button
              type="button"
              aria-haspopup="dialog"
              aria-expanded="false"
              aria-controls="radix-:r5v:"
              data-state="closed"
              class="w-full"
            >
              <button class="inline-flex items-center justify-center rounded-md text-sm font-medium transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:opacity-50 disabled:pointer-events-none ring-offset-background bg-primary text-primary-foreground hover:bg-primary/90 h-10 py-2 px-4 w-full bg-[#1c1c1c] text-white">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="24"
                  height="24"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  stroke-width="2"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  class="mr-2 h-4 w-4"
                >
                  <path d="M2 12s3-7 10-7 10 7 10 7-3 7-10 7-10-7-10-7Z"></path>
                  <circle cx="12" cy="12" r="3"></circle>
                </svg>{" "}
                Quick View
              </button>
            </button>
          </div>
        </div>
        <div class="rounded-lg border bg-card text-card-foreground shadow-sm col-span-1 flex flex-col h-full overflow-hidden relative">
          <div class="flex flex-col space-y-1.5 p-6">
            <div class="flex items-center gap-4">
              <div class="relative isolate">
                <div class="relative isolate">
                  <div class="absolute -bottom-1 -left-1 h-5 w-5 bg-muted-foreground rounded-full z-50 border-background border-4 !bg-green-500"></div>{" "}
                  <span class="relative flex shrink-0 overflow-hidden rounded-full w-12 h-12">
                    <img
                      class="h-full w-full aspect-square"
                      alt="isseicannotbefound"
                      src="https://tr.rbxcdn.com/30DAY-AvatarHeadshot-693296B750B1A5E5F762104FDBAFA533-Png/150/150/AvatarHeadshot/Png/noFilter"
                    />
                  </span>
                </div>
              </div>
              <div>
                <h3 class="text-lg font-semibold leading-none tracking-tight">
                  <div class="flex flex-col items-start gap-1">
                    <a data-state="closed">
                      <span
                        user="[object Object]"
                        type="SMALL"
                        class="truncate w-[50%] text-sm hover:cursor-pointer select-none text-red-500 transition duration-400 ease-in-out font-bold"
                      >
                        @isseicannotbefound
                        <div class="inline-flex"></div>
                      </span>
                    </a>
                    <span class="text-green-600 text-xs">
                      +1<span class="text-muted-foreground"> /</span>
                      <span class="text-red-500">-0</span>
                    </span>
                  </div>
                </h3>
                <p class="text-sm text-muted-foreground">a few seconds ago</p>
              </div>
            </div>
          </div>
          <div class="p-6 pt-0">
            <div class="flex flex-col gap-4 max-w-full">
              <div class="flex flex-col gap-x-2 max-w-full mb-4">
                <p class="text-md font-medium leading-none mb-2">Offer</p>
                <div class="grid grid-cols-4 lg:grid-cols-4 items-center gap-x-2 h-14">
                  <div class="relative">
                    <button data-state="closed">
                      <div class="aspect-square rounded-xl flex justify-center items-center h-14">
                        <img
                          class="h-full object-contain object-center rounded-xl"
                          src="https://images.zap.gg/file/zap-assets/blox-fruits/mammoth.png"
                          alt="Mammoth"
                        />
                      </div>
                    </button>
                  </div>
                  <div class="relative">
                    <button data-state="closed">
                      <div class="aspect-square rounded-xl flex justify-center items-center h-14">
                        <img
                          class="h-full object-contain object-center rounded-xl"
                          src="https://images.zap.gg/file/zap-assets/blox-fruits/control.png"
                          alt="Control"
                        />
                      </div>
                    </button>
                  </div>
                </div>
              </div>
              <div
                data-orientation="horizontal"
                role="none"
                class="shrink-0 bg-border h-[1px] w-full mt-1"
              ></div>
              <div class="flex flex-col gap-x-2 max-w-full mb-4">
                <p class="text-md font-medium leading-none mb-2">Request</p>
                <div class="grid grid-cols-4 lg:grid-cols-4 items-center gap-x-2 h-14">
                  <div class="relative">
                    <button data-state="closed">
                      <div class="aspect-square rounded-xl flex justify-center items-center h-14">
                        <img
                          class="h-full object-contain object-center rounded-xl"
                          src="https://images.zap.gg/file/zap-assets/blox-fruits/spirit.png"
                          alt="Spirit"
                        />
                      </div>
                    </button>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div class="items-center p-6 pt-0 mt-auto w-full flex flex-col">
            <div class="flex flex-col w-full mb-4">
              <p class="text-xs font-medium">Trade Ratings</p>
              <div class="flex mt-2">
                <div class="flex justify-center items-center px-3 py-1 bg-[#f1f5f9] rounded-full gap-x-2 hover:cursor-pointer">
                  <img src={Win} alt="logo" class="h-4 w-4" />
                  <div class="font-bold">5</div>
                </div>
                <div class="flex justify-center items-center px-3 py-1 bg-[#f1f5f9] rounded-full gap-x-2 ml-2 hover:cursor-pointer">
                  <img src={Fair} alt="Neutral" class="h-4 w-4" />
                  <div class="font-bold">0</div>
                </div>
                <div class="flex justify-center items-center px-3 py-1 bg-[#f1f5f9] rounded-full gap-x-2 ml-2 hover:cursor-pointer ">
                  <img src={Loss} alt="Negative" class="h-4 w-4" />
                  <div class="font-bold">0</div>
                </div>
              </div>
            </div>
            <button
              type="button"
              aria-haspopup="dialog"
              aria-expanded="false"
              aria-controls="radix-:r65:"
              data-state="closed"
              class="w-full"
            >
              <button class="inline-flex items-center justify-center rounded-md text-sm font-medium transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:opacity-50 disabled:pointer-events-none ring-offset-background bg-primary text-primary-foreground hover:bg-primary/90 h-10 py-2 px-4 w-full bg-[#1c1c1c] text-white">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="24"
                  height="24"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  stroke-width="2"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  class="mr-2 h-4 w-4"
                >
                  <path d="M2 12s3-7 10-7 10 7 10 7-3 7-10 7-10-7-10-7Z"></path>
                  <circle cx="12" cy="12" r="3"></circle>
                </svg>{" "}
                Quick View
              </button>
            </button>
          </div>
        </div>
        <div class="rounded-lg border bg-card text-card-foreground shadow-sm col-span-1 flex flex-col h-full overflow-hidden relative">
          <div class="flex flex-col space-y-1.5 p-6">
            <div class="flex items-center gap-4">
              <div class="relative isolate">
                <div class="relative isolate">
                  <div class="absolute -bottom-1 -left-1 h-5 w-5 bg-muted-foreground rounded-full z-50 border-background border-4 !bg-green-500"></div>{" "}
                  <span class="relative flex shrink-0 overflow-hidden rounded-full w-12 h-12">
                    <img
                      class="h-full w-full aspect-square"
                      alt="RyanXtran"
                      src="https://tr.rbxcdn.com/30DAY-AvatarHeadshot-7C6E16192E1F4E92ADEF460DCD062FC4-Png/150/150/AvatarHeadshot/Png/noFilter"
                    />
                  </span>
                </div>
              </div>
              <div>
                <h3 class="text-lg font-semibold leading-none tracking-tight">
                  <div class="flex flex-col items-start gap-1">
                    <a data-state="closed">
                      <span
                        user="[object Object]"
                        type="SMALL"
                        class="truncate w-[50%] text-sm hover:cursor-pointer select-none text-primary"
                      >
                        @RyanXtran
                        <div class="inline-flex"></div>
                      </span>
                    </a>
                    <span class="text-green-600 text-xs">
                      +0<span class="text-muted-foreground"> /</span>
                      <span class="text-red-500">-0</span>
                    </span>
                  </div>
                </h3>
                <p class="text-sm text-muted-foreground">a few seconds ago</p>
              </div>
            </div>
          </div>
          <div class="p-6 pt-0">
            <div class="flex flex-col gap-4 max-w-full">
              <div class="flex flex-col gap-x-2 max-w-full mb-4">
                <p class="text-md font-medium leading-none mb-2">Offer</p>
                <div class="grid grid-cols-4 lg:grid-cols-4 items-center gap-x-2 h-14">
                  <div class="relative">
                    <button data-state="closed">
                      <div class="aspect-square rounded-xl flex justify-center items-center h-14">
                        <img
                          class="h-full object-contain object-center rounded-xl"
                          src="https://images.zap.gg/file/zap-assets/blox-fruits/mammoth.png"
                          alt="Mammoth"
                        />
                      </div>
                    </button>
                  </div>
                  <div class="relative">
                    <button data-state="closed">
                      <div class="aspect-square rounded-xl flex justify-center items-center h-14">
                        <img
                          class="h-full object-contain object-center rounded-xl"
                          src="https://images.zap.gg/file/zap-assets/blox-fruits/spirit.png"
                          alt="Spirit"
                        />
                      </div>
                    </button>
                  </div>
                  <div class="relative">
                    <button data-state="closed">
                      <div class="aspect-square rounded-xl flex justify-center items-center h-14">
                        <img
                          class="h-full object-contain object-center rounded-xl"
                          src="https://images.zap.gg/file/zap-assets/blox-fruits/venom.png"
                          alt="Venom"
                        />
                      </div>
                    </button>
                  </div>
                  <div class="relative">
                    <button data-state="closed">
                      <div class="aspect-square rounded-xl flex justify-center items-center h-14">
                        <img
                          class="h-full object-contain object-center rounded-xl"
                          src="https://images.zap.gg/file/zap-assets/blox-fruits/control.png"
                          alt="Control"
                        />
                      </div>
                    </button>
                  </div>
                </div>
              </div>
              <div
                data-orientation="horizontal"
                role="none"
                class="shrink-0 bg-border h-[1px] w-full mt-1"
              ></div>
              <div class="flex flex-col gap-x-2 max-w-full mb-4">
                <p class="text-md font-medium leading-none mb-2">Request</p>
                <div class="grid grid-cols-4 lg:grid-cols-4 items-center gap-x-2 h-14">
                  <div class="relative">
                    <button data-state="closed">
                      <div class="aspect-square rounded-xl flex justify-center items-center h-14">
                        <img
                          class="h-full object-contain object-center rounded-xl"
                          src="https://images.zap.gg/file/zap-assets/blox-fruits/gamepasses/plus-fruit-storage.png"
                          alt="+1 Fruit Storage"
                        />
                      </div>
                    </button>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div class="items-center p-6 pt-0 mt-auto w-full flex flex-col">
            <div class="flex flex-col w-full mb-4">
              <p class="text-xs font-medium">Trade Ratings</p>
              <div class="flex mt-2">
                <div class="flex justify-center items-center px-3 py-1 bg-[#f1f5f9] rounded-full gap-x-2 hover:cursor-pointer">
                  <img src={Win} alt="logo" class="h-4 w-4" />
                  <div class="font-bold">0</div>
                </div>
                <div class="flex justify-center items-center px-3 py-1 bg-[#f1f5f9] rounded-full gap-x-2 ml-2 hover:cursor-pointer">
                  <img src={Fair} alt="Neutral" class="h-4 w-4" />
                  <div class="font-bold">3</div>
                </div>
                <div class="flex justify-center items-center px-3 py-1 bg-[#f1f5f9] rounded-full gap-x-2 ml-2 hover:cursor-pointer ">
                  <img src={Loss} alt="Negative" class="h-4 w-4" />
                  <div class="font-bold">0</div>
                </div>
              </div>
            </div>
            <button
              type="button"
              aria-haspopup="dialog"
              aria-expanded="false"
              aria-controls="radix-:r6d:"
              data-state="closed"
              class="w-full"
            >
              <button class="inline-flex items-center justify-center rounded-md text-sm font-medium transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:opacity-50 disabled:pointer-events-none ring-offset-background bg-primary text-primary-foreground hover:bg-primary/90 h-10 py-2 px-4 w-full bg-[#1c1c1c] text-white">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="24"
                  height="24"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  stroke-width="2"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  class="mr-2 h-4 w-4"
                >
                  <path d="M2 12s3-7 10-7 10 7 10 7-3 7-10 7-10-7-10-7Z"></path>
                  <circle cx="12" cy="12" r="3"></circle>
                </svg>{" "}
                Quick View
              </button>
            </button>
          </div>
        </div>
      </div>
      <div class="flex justify-center gap-4 w-full mt-6">
        <a
          rel="noreferrer"
          class="inline-flex items-center justify-center rounded-md text-sm font-medium transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:opacity-50 disabled:pointer-events-none ring-offset-background bg-primary text-primary-foreground hover:bg-primary/90 h-10 px-16 py-6 bg-[#1c1c1c] text-white"
          href="/"
        >
          <div class="flex items-center justify-center">
            <p>See more</p>{" "}
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="24"
              height="24"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              stroke-width="2"
              stroke-linecap="round"
              stroke-linejoin="round"
              class="ml-2 h-5 w-5"
            >
              <path d="M7 7h10v10"></path>
              <path d="M7 17 17 7"></path>
            </svg>
          </div>
        </a>
      </div>
    </div>
  );
}
