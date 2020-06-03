from aiogram.dispatcher.filters.state import StatesGroup, State


class Test(StatesGroup):
  genre = State()
  price = State()
  platform = State()
  operatingSystem = State()
  languages = State()
