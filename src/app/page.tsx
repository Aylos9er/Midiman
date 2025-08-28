import MidiStation from '@/components/MidiStation'
import GraphingStation from '@/components/GraphingStation'

export default function Home() {
  return (
    <div className="container mx-auto px-4 py-8 space-y-8">
      <h1 className="text-3xl font-bold text-center mb-8">
        Blackbox by Midi Man
      </h1>
      <MidiStation />
      <GraphingStation />
    </div>
  )
}