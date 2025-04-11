import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { ArrowRight, Calendar, Clock, Users, CheckCircle2, Zap } from "lucide-react"
import Link from "next/link"

export default function Home() {
  return (
    <div className="flex flex-col min-h-screen">
      {/* Hero Section */}
      <section className="relative py-20 bg-gradient-to-b from-[#7886C7]/10 to-background">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto text-center">
            <h1 className="text-4xl md:text-6xl font-bold mb-6 text-[#7886C7]">
              Simplifica tus reuniones con FlowlyMeet
            </h1>
            <p className="text-xl text-muted-foreground mb-8">
              La plataforma que transforma la forma en que tu equipo se reúne y colabora
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button size="lg" className="bg-[#7886C7] hover:bg-[#7886C7]/90">
                Comenzar Gratis
                <ArrowRight className="ml-2 h-4 w-4" />
              </Button>
              <Button size="lg" variant="outline">
                Ver Demo
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-3xl font-bold mb-4">¿Cómo funciona FlowlyMeet?</h2>
            <p className="text-xl text-muted-foreground">
              Simplifica la gestión de reuniones en tres sencillos pasos
            </p>
          </div>
          <div className="grid md:grid-cols-3 gap-8">
            <Card className="border-2 border-[#7886C7]/20">
              <CardHeader>
                <div className="w-12 h-12 bg-[#7886C7]/10 rounded-full flex items-center justify-center mb-4">
                  <Calendar className="h-6 w-6 text-[#7886C7]" />
                </div>
                <CardTitle>1. Crea tu reunión</CardTitle>
                <CardDescription>
                  Programa reuniones en segundos con nuestra interfaz intuitiva
                </CardDescription>
              </CardHeader>
            </Card>
            <Card className="border-2 border-[#7886C7]/20">
              <CardHeader>
                <div className="w-12 h-12 bg-[#7886C7]/10 rounded-full flex items-center justify-center mb-4">
                  <Users className="h-6 w-6 text-[#7886C7]" />
                </div>
                <CardTitle>2. Invita a tu equipo</CardTitle>
                <CardDescription>
                  Comparte el enlace con los participantes y gestiona las confirmaciones
                </CardDescription>
              </CardHeader>
            </Card>
            <Card className="border-2 border-[#7886C7]/20">
              <CardHeader>
                <div className="w-12 h-12 bg-[#7886C7]/10 rounded-full flex items-center justify-center mb-4">
                  <CheckCircle2 className="h-6 w-6 text-[#7886C7]" />
                </div>
                <CardTitle>3. Celebra la reunión</CardTitle>
                <CardDescription>
                  Conéctate, colabora y haz seguimiento de los acuerdos
                </CardDescription>
              </CardHeader>
            </Card>
          </div>
        </div>
      </section>

      {/* Benefits Section */}
      <section className="py-20 bg-[#7886C7]/5">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-3xl font-bold mb-4">Beneficios de FlowlyMeet</h2>
            <p className="text-xl text-muted-foreground">
              Descubre cómo podemos mejorar la productividad de tu equipo
            </p>
          </div>
          <div className="grid md:grid-cols-2 gap-8">
            <Card>
              <CardContent className="pt-6">
                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 bg-[#7886C7]/10 rounded-full flex items-center justify-center flex-shrink-0">
                    <Clock className="h-6 w-6 text-[#7886C7]" />
                  </div>
                  <div>
                    <h3 className="text-xl font-semibold mb-2">Ahorra tiempo</h3>
                    <p className="text-muted-foreground">
                      Reduce el tiempo dedicado a la organización de reuniones y enfócate en lo importante
                    </p>
                  </div>
                </div>
              </CardContent>
            </Card>
            <Card>
              <CardContent className="pt-6">
                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 bg-[#7886C7]/10 rounded-full flex items-center justify-center flex-shrink-0">
                    <Zap className="h-6 w-6 text-[#7886C7]" />
                  </div>
                  <div>
                    <h3 className="text-xl font-semibold mb-2">Mayor productividad</h3>
                    <p className="text-muted-foreground">
                      Optimiza el tiempo de tu equipo con reuniones más efectivas y organizadas
                    </p>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <Card className="bg-[#7886C7]/10 border-0">
            <CardContent className="py-16">
              <div className="max-w-2xl mx-auto text-center">
                <h2 className="text-3xl font-bold mb-4">¿Listo para transformar tus reuniones?</h2>
                <p className="text-xl text-muted-foreground mb-8">
                  Únete a FlowlyMeet hoy y descubre una nueva forma de gestionar tus reuniones
                </p>
                <Button size="lg" className="bg-[#7886C7] hover:bg-[#7886C7]/90">
                  Comenzar Gratis
                  <ArrowRight className="ml-2 h-4 w-4" />
                </Button>
              </div>
            </CardContent>
          </Card>
        </div>
      </section>
    </div>
  )
}
