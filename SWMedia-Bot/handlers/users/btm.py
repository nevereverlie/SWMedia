from aiogram.types import ReplyKeyboardMarkup, KeyboardButton

start = ReplyKeyboardMarkup(
  keyboard=[
    [
      KeyboardButton(text="Show events"),
    ]
  ],
  resize_keyboard=True
)

events = ReplyKeyboardMarkup(
  keyboard=[
    [
      KeyboardButton(text="Fan Meeting"),
      KeyboardButton(text="SW Festival"),
    ],
    [
      KeyboardButton(text="Back to start")
    ]
  ],
  resize_keyboard=True
)

subscribe_fan = ReplyKeyboardMarkup(
  keyboard=[
    [
      KeyboardButton(text="Subscribe to Fan Meeting")
    ],
    [
      KeyboardButton(text="Back to events list")
    ]
  ],
  resize_keyboard=True
)

subscribe_fest = ReplyKeyboardMarkup(
  keyboard=[
    [
      KeyboardButton(text="Subscribe to SW festival")
    ],
    [
      KeyboardButton(text="Back to events list")
    ]
  ],
  resize_keyboard=True
)

unsubscribe_fan = ReplyKeyboardMarkup(
  keyboard=[
    [
      KeyboardButton(text="Unsubscribe from Fan Meeting")
    ],
    [
      KeyboardButton(text="Back to events list")
    ]
  ],
  resize_keyboard=True
)

unsubscribe_fest = ReplyKeyboardMarkup(
  keyboard=[
    [
      KeyboardButton(text="Unsubscribe from SW festival")
    ],
    [
      KeyboardButton(text="Back to events list")
    ]
  ],
  resize_keyboard=True
)
