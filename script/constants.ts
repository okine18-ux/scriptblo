import type { Game } from './types.ts';

// Fix: The chained `.sort()` caused a type inference issue. By declaring the
// array first with the `Game[]` type, we ensure the `platforms` property
// is correctly validated before sorting the array in place.
export const gamesData: Game[] = [
    {
        name: "99 Nights in the Forest",
        image: "https://tr.rbxcdn.com/180DAY-4a7114ff1394679d266f6202114848e7/256/256/Image/Webp/noFilter",
        description: "A survival script that challenges you to last 99 nights in a spooky, procedurally generated forest. Craft tools, build shelters, and fend off mysterious creatures that lurk in the dark.",
        size: "250 KB",
        downloads: "1.2M",
        reviews: "15K",
        platforms: ['windows', 'xbox', 'android', 'apple']
    },
    {
        name: "Plants Vs Brainrots",
        image: "https://tr.rbxcdn.com/180DAY-b2065d98fbb7f2ecfcf2b0924ecd4a11/256/256/Image/Webp/noFilter",
        description: "A tower defense script inspired by the classic game. Plant an arsenal of powerful flora to defend your garden from waves of goofy 'Brainrot' zombies. Unlock new plants and strategies to survive the onslaught.",
        size: "310 KB",
        downloads: "950K",
        reviews: "11K",
        platforms: ['windows', 'xbox', 'android', 'apple']
    },
    {
        name: "Steal a Brainrot",
        image: "https://tr.rbxcdn.com/180DAY-fa226c6d1718c7d8d7a94495bd79f04f/256/256/Image/Webp/noFilter",
        description: "A hilarious heist script where you and your team must infiltrate a high-security meme vault to steal the legendary 'Brainrot'. Dodge lasers, solve puzzles, and outsmart guards in this wacky adventure.",
        size: "180 KB",
        downloads: "2.5M",
        reviews: "32K",
        platforms: ['windows', 'xbox', 'android', 'apple']
    }
];

gamesData.sort((a, b) => a.name.localeCompare(b.name));