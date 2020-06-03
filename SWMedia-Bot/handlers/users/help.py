from aiogram import types
from aiogram.dispatcher.filters.builtin import CommandHelp

from loader import dp
from utils.misc import rate_limit

import logging


@rate_limit(5, 'help')
@dp.message_handler(CommandHelp())
async def bot_help(message: types.Message):
  text = [
    'List command: ',
    '/start - Start a dialogue',
    '/help - Get help',
    '/recommend - Get recommend'
  ]
  await message.answer('\n'.join(text))
