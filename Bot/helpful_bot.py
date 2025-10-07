# helpful_bot.py
#
# A simple, helpful Telegram bot with some useful features.
#
# Author: Your Name
# Date: 2025-08-11
#
# This bot is for educational and helpful purposes only.

import logging
from datetime import datetime
import pytz
from telegram import Update
from telegram.ext import Application, CommandHandler, MessageHandler, filters, ContextTypes

# --- Configuration ---
# Replace with your actual Telegram Bot Token from BotFather
BOT_TOKEN = "8360385361:AAExBFdcS3pVQx63x0H6f1bwvoX88SVLbNk"

# --- Logging Setup ---
# Enable logging to see errors and bot activity
logging.basicConfig(
    format="%(asctime)s - %(name)s - %(levelname)s - %(message)s", level=logging.INFO
)
logger = logging.getLogger(__name__)


# --- Command Handlers ---

async def start(update: Update, context: ContextTypes.DEFAULT_TYPE) -> None:
    """Sends a welcome message when the /start command is issued."""
    user = update.effective_user
    await update.message.reply_html(
        f"👋 Hello, {user.mention_html()}!\n\n"
        "I am a helpful bot. Here are some things I can do:\n"
        " - /help - Show this help message\n"
        " - /time - Show the current time in Indore, India\n"
        " - /date - Show the current date in Indore, India\n"
        " - /echo <message> - I will repeat your message back to you"
    )

async def help_command(update: Update, context: ContextTypes.DEFAULT_TYPE) -> None:
    """Sends a help message when the /help command is issued."""
    await update.message.reply_text(
        "Here are the commands you can use:\n"
        "/start - Welcome message\n"
        "/help - Show this help message\n"
        "/time - Show the current time in Indore, India\n"
        "/date - Show the current date in Indore, India\n"
        "/echo <message> - I will repeat your message back to you"
    )

async def get_time(update: Update, context: ContextTypes.DEFAULT_TYPE) -> None:
    """Sends the current time in Indore, India."""
    try:
        # Set the timezone to Indore, India
        tz = pytz.timezone('Asia/Kolkata')
        # Get the current time in the specified timezone
        current_time = datetime.now(tz).strftime("%H:%M:%S")
        await update.message.reply_text(f"The current time in Indore, India is: {current_time}")
    except Exception as e:
        logger.error(f"Error getting time: {e}")
        await update.message.reply_text("Sorry, I couldn't get the time right now.")

async def get_date(update: Update, context: ContextTypes.DEFAULT_TYPE) -> None:
    """Sends the current date in Indore, India."""
    try:
        # Set the timezone to Indore, India
        tz = pytz.timezone('Asia/Kolkata')
        # Get the current date in the specified timezone
        current_date = datetime.now(tz).strftime("%Y-%m-%d")
        await update.message.reply_text(f"The current date in Indore, India is: {current_date}")
    except Exception as e:
        logger.error(f"Error getting date: {e}")
        await update.message.reply_text("Sorry, I couldn't get the date right now.")


async def echo(update: Update, context: ContextTypes.DEFAULT_TYPE) -> None:
    """Echo the user's message."""
    await update.message.reply_text(update.message.text)


async def unknown_command(update: Update, context: ContextTypes.DEFAULT_TYPE) -> None:
    """Handles any commands that are not recognized."""
    await update.message.reply_text("Sorry, I don't understand that command.")


# --- Main Bot Logic ---

def main() -> None:
    """Start the bot."""
    # Create the Application and pass it your bot's token.
    application = Application.builder().token(BOT_TOKEN).build()

    # on different commands - answer in Telegram
    application.add_handler(CommandHandler("start", start))
    application.add_handler(CommandHandler("help", help_command))
    application.add_handler(CommandHandler("time", get_time))
    application.add_handler(CommandHandler("date", get_date))
    application.add_handler(CommandHandler("echo", echo))


    # on non command i.e message - echo the message on Telegram
    application.add_handler(MessageHandler(filters.TEXT & ~filters.COMMAND, unknown_command))

    # Run the bot until the user presses Ctrl-C
    logger.info("Bot started. Press Ctrl-C to stop.")
    application.run_polling()


if __name__ == "__main__":
    main()
