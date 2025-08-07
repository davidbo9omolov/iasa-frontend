export type TeamCard = {
  name?: string
  surname?: string
  position: string
  image?: string
  email?: string
  socialNetworks?: { name: string; link: string }[]
}

export interface SelectedTeamCard {
  isOpen?: boolean
  teamCard: TeamCard
}

export interface AppState {
  user: {
    name: string
    email: string
    token: string
  }
  selectedTeamCard: SelectedTeamCard
}

export type PresidiumCard = {
  name?: string
  surname?: string
  position: string
  image?: string
  email?: string
  socialNetworks?: { name: string; link: string }[]
}

export interface SelectedPresidiumCard {
  isOpen?: boolean
  presidiumCard: PresidiumCard
}

export interface PresidiumMember {
  user: {
    name: string
    email: string
    token: string
  }
  selectedPresidiumCard: SelectedPresidiumCard
}
