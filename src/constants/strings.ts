export const GAME_TITLE = process.env.REACT_APP_GAME_NAME!

export const WIN_MESSAGES = ['Subberle!', 'Gratulation!', 'Mumpfimäßig!']
export const GAME_COPIED_MESSAGE = 'Spiel in die Zwischenablage kopiert'
export const NOT_ENOUGH_LETTERS_MESSAGE = 'Nicht genug Buchstaben'
export const WORD_NOT_FOUND_MESSAGE = 'Wort nicht gefunden'
export const HARD_MODE_ALERT_MESSAGE =
  'Hard Mode kann nur am Anfang aktiviert werden!'
export const HARD_MODE_DESCRIPTION =
  'Alle aufgedeckten Hinweise müssen in folgenden Versuchen verwendet werden'
export const HIGH_CONTRAST_MODE_DESCRIPTION = 'Für besseres Farbsehen'
export const CORRECT_WORD_MESSAGE = (solution: string) =>
  `Das Wort war ${solution}`
export const WRONG_SPOT_MESSAGE = (guess: string, position: number) =>
  `Du musst ${guess} an Position ${position} verwenden`
export const NOT_CONTAINED_MESSAGE = (letter: string) =>
  `Dein Versuch muss ${letter} enthalten`
export const ENTER_TEXT = 'Eingabe'
export const DELETE_TEXT = 'Löschen'
export const STATISTICS_TITLE = 'Statistiken'
export const GUESS_DISTRIBUTION_TEXT = 'Verteilung der Versuche'
export const NEW_WORD_TEXT = 'Neues Wort in'
export const SHARE_TEXT = 'Teilen'
export const SHARE_FAILURE_TEXT =
  'Kann die Ergebnisse nicht teilen. Diese Funktion ist nur in sicheren Kontexten (HTTPS) und in einigen oder allen unterstützenden Browsern verfügbar.'
export const MIGRATE_BUTTON_TEXT = 'Übertragen'
export const MIGRATE_DESCRIPTION_TEXT =
  'Hier klicken, um deine Statistiken auf ein neues Gerät zu übertragen.'
export const TOTAL_TRIES_TEXT = 'Versuche gesamt'
export const SUCCESS_RATE_TEXT = 'Erfolgsquote'
export const CURRENT_STREAK_TEXT = 'Aktueller Streak'
export const BEST_STREAK_TEXT = 'Bester Streak'
export const DISCOURAGE_INAPP_BROWSER_TEXT =
  'Du verwendest einen eingebetteten Browser und könntest Probleme beim Teilen oder Speichern deiner Ergebnisse haben. Wir empfehlen dir, stattdessen den Standard-Browser deines Geräts zu verwenden.'

export const DATEPICKER_TITLE = 'Vergangenes Datum wählen'
export const DATEPICKER_CHOOSE_TEXT = 'Wählen'
export const DATEPICKER_TODAY_TEXT = 'heute'
export const ARCHIVE_GAMEDATE_TEXT = 'Spieldatum'