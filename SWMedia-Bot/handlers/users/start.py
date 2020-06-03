from aiogram.types import Message, ReplyKeyboardRemove
from aiogram.dispatcher.filters.builtin import CommandStart
from aiogram.dispatcher.filters import Text
from loader import dp
from utils.misc import rate_limit

from handlers.users.btm import start, subscribe_fan, subscribe_fest, unsubscribe_fan, unsubscribe_fest, events

isFanSubscribed = False
isFestSubscribed = False


@rate_limit(5, 'start')
@dp.message_handler(CommandStart())
async def bot_start(message: Message):
    await message.answer(f'Hi, {message.from_user.full_name}!', reply_markup=start)


@dp.message_handler(Text(equals=["Show events"]))
async def get_food(message: Message):
    await message.answer(f"Available events", reply_markup=events)


@dp.message_handler(Text(equals=["Fan Meeting"]))
async def get_food(message: Message):
    mess = f"SW Fan Meet Up\nDescription: fan meeting with Jeorge Lucas\nWhen: 12.06.2020 at 3 p.m.\nPrice: free"
    global isFanSubscribed
    if isFanSubscribed:
        await message.answer(mess, reply_markup=unsubscribe_fan)
    else:
        await message.answer(mess, reply_markup=subscribe_fan)
        isFanSubscribed = True


@dp.message_handler(Text(equals=["SW Festival"]))
async def get_food(message: Message):
    mess = f"SW Fest №4\nDescription: vast festival for fans all over the world\nWhen: 22.06.2020 at 1 p.m.\nPrice: free"
    global isFestSubscribed
    if isFestSubscribed:
        await message.answer(mess, reply_markup=unsubscribe_fest)
    else:
        await message.answer(mess, reply_markup=subscribe_fest)
        isFestSubscribed = True


@dp.message_handler(Text(equals=["Subscribe to SW festival"]))
async def get_food(message: Message):
    await message.answer(f"You have successfully subscribed to SW festival event!", reply_markup=unsubscribe_fest)


@dp.message_handler(Text(equals=["Subscribe to Fan Meeting"]))
async def get_food(message: Message):
    await message.answer(f"You have successfully subscribed to Fan Meeting event!", reply_markup=unsubscribe_fan)


@dp.message_handler(Text(equals=["Unsubscribe from Fan Meeting"]))
async def get_food(message: Message):
    await message.answer(f"You have unsubscribed from Fan Meeting event.", reply_markup=subscribe_fan)


@dp.message_handler(Text(equals=["Unsubscribe from SW festival"]))
async def get_food(message: Message):
    await message.answer(f"You have unsubscribed from SW festival event.", reply_markup=subscribe_fest)


@dp.message_handler(Text(equals=["Back to events list"]))
async def get_food(message: Message):
    await message.answer(f"Start menu", reply_markup=events)


@dp.message_handler(Text(equals=["Back to start"]))
async def get_food(message: Message):
    await message.answer(f"Event menu", reply_markup=start)
