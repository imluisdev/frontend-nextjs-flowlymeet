import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"

export default function PrivacyPolicy() {
  return (
    <div className="min-h-screen bg-background py-12">
      <div className="container mx-auto px-4 max-w-4xl">
        <Card className="border-0 shadow-none">
          <CardHeader className="text-center">
            <CardTitle className="text-3xl font-bold text-[#7886C7]">
              Política de Privacidad
            </CardTitle>
            <p className="text-muted-foreground mt-2">
              Última actualización: {new Date().toLocaleDateString('es-ES', { year: 'numeric', month: 'long', day: 'numeric' })}
            </p>
          </CardHeader>
          <CardContent className="space-y-8">
            <section>
              <h2 className="text-2xl font-semibold mb-4">1. Introducción</h2>
              <p className="text-muted-foreground">
                En FlowlyMeet, nos tomamos muy en serio la privacidad de nuestros usuarios. Esta política de privacidad describe cómo recopilamos, utilizamos y protegemos su información personal cuando utiliza nuestra plataforma.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-semibold mb-4">2. Información que Recopilamos</h2>
              <p className="text-muted-foreground mb-4">
                Recopilamos la siguiente información:
              </p>
              <ul className="list-disc pl-6 space-y-2 text-muted-foreground">
                <li>Información de registro (nombre, correo electrónico)</li>
                <li>Información de perfil (foto, cargo, empresa)</li>
                <li>Datos de uso de la plataforma</li>
                <li>Información de reuniones programadas</li>
                <li>Comunicaciones con nuestro equipo de soporte</li>
              </ul>
            </section>

            <section>
              <h2 className="text-2xl font-semibold mb-4">3. Uso de la Información</h2>
              <p className="text-muted-foreground mb-4">
                Utilizamos su información para:
              </p>
              <ul className="list-disc pl-6 space-y-2 text-muted-foreground">
                <li>Proporcionar y mejorar nuestros servicios</li>
                <li>Personalizar su experiencia</li>
                <li>Enviar notificaciones importantes</li>
                <li>Responder a sus consultas y solicitudes</li>
                <li>Analizar el uso de la plataforma</li>
              </ul>
            </section>

            <section>
              <h2 className="text-2xl font-semibold mb-4">4. Protección de Datos</h2>
              <p className="text-muted-foreground">
                Implementamos medidas de seguridad técnicas y organizativas para proteger su información personal contra accesos no autorizados, alteraciones, divulgación o destrucción.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-semibold mb-4">5. Compartir Información</h2>
              <p className="text-muted-foreground">
                No vendemos ni alquilamos su información personal a terceros. Solo compartimos información cuando es necesario para proporcionar nuestros servicios o cuando la ley lo requiere.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-semibold mb-4">6. Sus Derechos</h2>
              <p className="text-muted-foreground mb-4">
                Usted tiene derecho a:
              </p>
              <ul className="list-disc pl-6 space-y-2 text-muted-foreground">
                <li>Acceder a sus datos personales</li>
                <li>Corregir datos inexactos</li>
                <li>Solicitar la eliminación de sus datos</li>
                <li>Oponerse al procesamiento de sus datos</li>
                <li>Exportar sus datos</li>
              </ul>
            </section>

            <section>
              <h2 className="text-2xl font-semibold mb-4">7. Cookies y Tecnologías Similares</h2>
              <p className="text-muted-foreground">
                Utilizamos cookies y tecnologías similares para mejorar su experiencia, analizar el tráfico y personalizar el contenido. Puede controlar el uso de cookies a través de la configuración de su navegador.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-semibold mb-4">8. Cambios en la Política de Privacidad</h2>
              <p className="text-muted-foreground">
                Nos reservamos el derecho de modificar esta política de privacidad en cualquier momento. Le notificaremos sobre cambios significativos a través de la plataforma o por correo electrónico.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-semibold mb-4">9. Contacto</h2>
              <p className="text-muted-foreground">
                Si tiene preguntas sobre esta política de privacidad, puede contactarnos en:
                <br />
                <a href="mailto:andreereyes0@gmail.com" className="text-[#7886C7] hover:underline">
                  andreereyes0@gmail.com
                </a>
              </p>
            </section>
          </CardContent>
        </Card>
      </div>
    </div>
  )
} 