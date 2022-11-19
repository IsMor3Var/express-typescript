import { DiaryEntry } from '../types'
import DiaryData from './diaries.json'

const diaries: DiaryEntry[] = DiaryData as DiaryEntry[]

export const getEntries = (): DiaryEntry[] => diaries

export const addEntry = (): undefined => undefined
