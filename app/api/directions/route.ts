
import { NextResponse } from 'next/server'

export async function GET() {
  const mockData = {
    status: "OK",
    routes: [
      {
        summary: "Mock Route",
        legs: [
          {
            distance: { text: "5.3 km", value: 5300 },
            duration: { text: "12 mins", value: 720 },
            end_address: "Rua do Destino, 123",
            start_address: "Ponto de Partida, 456",
            steps: []
          }
        ]
      }
    ]
  };
  return NextResponse.json(mockData);
}
