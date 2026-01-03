// 21-Day Fast - Central Configuration
// Update this file when adding new days - all pages will automatically update

const DAYS_CONFIG = {
    1: {
        title: "A Heart of Gratitude",
        date: "January 5, 2026",
        dateShort: "Jan 5",
        scripture: "Psalm 116:12",
        quote: "You made it through last year—not by your strength, but by His grace.",
        videoUrl: "https://storage.googleapis.com/msgsndr/ufTeOHywYxLPaG9TDWPG/media/69590478397a31317ec3ef1e.mp4",
        quoteGifUrl: "https://storage.googleapis.com/msgsndr/ufTeOHywYxLPaG9TDWPG/media/6959718705b5114f45d6c7f4.gif"
    },
    2: {
        title: "When God Comes Through",
        date: "January 6, 2026",
        dateShort: "Jan 6",
        scripture: "Psalm 126:1-2",
        quote: "God came through for you. The mountain has been removed. Now you can breathe.",
        videoUrl: "https://storage.googleapis.com/msgsndr/ufTeOHywYxLPaG9TDWPG/media/69596eb1edb8a2a88d7cd2d5.mp4",
        quoteGifUrl: "https://storage.googleapis.com/msgsndr/ufTeOHywYxLPaG9TDWPG/media/69597031748303ba26dfc471.gif"
    },
    3: {
        title: "Out of the Rut",
        date: "January 7, 2026",
        dateShort: "Jan 7",
        scripture: "Psalm 40:2",
        quote: "God divinely remembered you and took you out of the rut.",
        videoUrl: "https://storage.googleapis.com/msgsndr/ufTeOHywYxLPaG9TDWPG/media/695976d1748303c5e6e0dc06.mp4",
        quoteGifUrl: "https://storage.googleapis.com/msgsndr/ufTeOHywYxLPaG9TDWPG/media/695977d83ccdd69bf7aa6fd3.gif"
    },
    4: {
        title: "But for God",
        date: "January 8, 2026",
        dateShort: "Jan 8",
        scripture: "Psalm 115:17-18",
        quote: "But for God, things could have been fatal. But for God, you're still here.",
        videoUrl: "https://storage.googleapis.com/msgsndr/ufTeOHywYxLPaG9TDWPG/media/6959918505b511dac0dc6a58.mp4",
        quoteGifUrl: "https://storage.googleapis.com/msgsndr/ufTeOHywYxLPaG9TDWPG/media/695992bcedb8a2390683a969.gif"
    },
    5: {
        title: "Healed from Betrayal",
        date: "January 9, 2026",
        dateShort: "Jan 9",
        scripture: "Psalm 27:13",
        quote: "God healed your heart. Now you are stronger, smarter, and poised for great things.",
        videoUrl: "https://storage.googleapis.com/msgsndr/ufTeOHywYxLPaG9TDWPG/media/6959982c6e700e262c09d19e.mp4",
        quoteGifUrl: "https://storage.googleapis.com/msgsndr/ufTeOHywYxLPaG9TDWPG/media/6959994e3ccdd69ae7b301dd.gif"
    },
    6: {
        title: "Out of the Dungeon",
        date: "January 10, 2026",
        dateShort: "Jan 10",
        scripture: "Jonah 2:7-10",
        quote: "In His mercy, God took you out of the dungeon, spoke kindly to you, and restored you for His glory.",
        videoUrl: "https://storage.googleapis.com/msgsndr/ufTeOHywYxLPaG9TDWPG/media/69599ed26e700ecffa0cf879.mp4",
        quoteGifUrl: "https://storage.googleapis.com/msgsndr/ufTeOHywYxLPaG9TDWPG/media/69599fcf748303a262ec5488.gif"
    },
    7: {
        title: "Coming Soon",
        date: "January 11, 2026",
        dateShort: "Jan 11",
        scripture: "",
        quote: "",
        videoUrl: "",
        quoteGifUrl: ""
    }
};

const BASE_URL = "https://calvaryhephzibah.co.uk/21dayfast";

// Function to initialize dynamic navigation
function initDynamicNav(currentDay) {
    const prevDay = currentDay - 1;
    const nextDay = currentDay + 1;
    
    // Update previous day link
    const prevButton = document.querySelector('.nav-button.prev');
    if (prevButton && prevDay >= 1 && DAYS_CONFIG[prevDay]) {
        prevButton.href = `${BASE_URL}-day${prevDay}`;
        const titleSpan = prevButton.querySelector('.nav-button-title');
        if (titleSpan) {
            titleSpan.textContent = `Day ${prevDay}: ${DAYS_CONFIG[prevDay].title}`;
        }
    } else if (prevButton && prevDay < 1) {
        // Link to series home for Day 1
        prevButton.href = BASE_URL;
        const labelSpan = prevButton.querySelector('.nav-button-label');
        const titleSpan = prevButton.querySelector('.nav-button-title');
        if (labelSpan) labelSpan.textContent = '← Back to';
        if (titleSpan) titleSpan.textContent = 'Series Home';
    }
    
    // Update next day link
    const nextButton = document.querySelector('.nav-button.next');
    if (nextButton && nextDay <= 21 && DAYS_CONFIG[nextDay]) {
        nextButton.href = `${BASE_URL}-day${nextDay}`;
        const titleSpan = nextButton.querySelector('.nav-button-title');
        if (titleSpan) {
            titleSpan.textContent = `Day ${nextDay}: ${DAYS_CONFIG[nextDay].title}`;
        }
    } else if (nextButton && nextDay > 21) {
        // Hide next button on Day 21
        nextButton.style.display = 'none';
    }
    
    // Update sidebar day list if present
    updateSidebarDays();
}

// Function to update sidebar days list
function updateSidebarDays() {
    const dayItems = document.querySelectorAll('.day-item');
    dayItems.forEach(item => {
        const dayNum = item.getAttribute('data-day');
        if (dayNum && DAYS_CONFIG[dayNum]) {
            const config = DAYS_CONFIG[dayNum];
            const titleEl = item.querySelector('.day-item-title');
            const numberEl = item.querySelector('.day-item-number');
            
            if (titleEl) titleEl.textContent = config.title;
            if (numberEl) numberEl.textContent = `Day ${dayNum} — ${config.dateShort}`;
            
            // Update link
            if (item.tagName === 'A') {
                item.href = `${BASE_URL}-day${dayNum}`;
            }
        }
    });
}

// Function to update share modal downloads
function initShareDownloads(currentDay) {
    const config = DAYS_CONFIG[currentDay];
    if (!config) return;
    
    // Update quote GIF download
    const quoteDownload = document.querySelector('.download-btn[download*="Quote"]');
    if (quoteDownload && config.quoteGifUrl) {
        quoteDownload.href = config.quoteGifUrl;
        quoteDownload.download = `Day${currentDay}-Quote-21DayFast.gif`;
    }
    
    // Update video download
    const videoDownload = document.querySelector('.download-btn[download*="Video"]');
    if (videoDownload && config.videoUrl) {
        videoDownload.href = config.videoUrl;
        videoDownload.download = `Day${currentDay}-Video-21DayFast.mp4`;
    }
}

// Export for use
if (typeof module !== 'undefined' && module.exports) {
    module.exports = { DAYS_CONFIG, initDynamicNav, initShareDownloads };
}
