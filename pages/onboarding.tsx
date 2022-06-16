import {
  ButtonGroup,
  Container,
  Heading,
  useBreakpointValue,
  VStack,
} from '@chakra-ui/react'
import {
  Card,
  CardBody,
  DisplayIf,
  Field,
  FormLayout,
  FormStep,
  FormStepper,
  NextButton,
  PrevButton,
  StepForm,
  SubmitHandler,
} from '@saas-ui/react'

import { NextPage } from 'next'

interface InformationInputs {
  firstName: string
  lastName: string
  company?: string
  companySize: string
}

interface WorkspaceInputs {
  name: string
  url?: string
}

interface InviteInputs {
  email?: string
}

type FormInputs = InformationInputs & WorkspaceInputs & InviteInputs

const OnboardingPage: NextPage = () => {
  const onSubmit: SubmitHandler<FormInputs> = async (data) => {
    console.log(data)
  }

  return (
    <Container maxW="container.xl" pt="20">
      <VStack spacing="8">
        <Heading size="lg" textAlign="center">
          Welcome to ACME Corp
        </Heading>

        <StepForm<FormInputs> onSubmit={onSubmit} width="420px" noValidate>
          <FormStepper
            orientation={useBreakpointValue({
              base: 'vertical',
              md: 'horizontal',
            })}
          >
            <FormStep name="information" title="Information">
              <Card>
                <CardBody>
                  <FormLayout>
                    <FormLayout columns={{ base: 1, md: 2 }}>
                      <Field
                        name="firstName"
                        label="First name"
                        isRequired
                        rules={{ required: 'Please enter your first name.' }}
                      />
                      <Field
                        name="lastName"
                        label="Last name"
                        isRequired
                        rules={{ required: 'Please enter your last name.' }}
                      />
                    </FormLayout>
                    <Field name="company" label="Company name" />
                    <DisplayIf name="company">
                      <Field
                        name="companySize"
                        label="Company size"
                        placeholder="Select your company size"
                        type="select"
                        options={[
                          {
                            value: '1',
                            label: '1 to 5',
                          },
                          {
                            value: '5',
                            label: '5 to 20',
                          },
                          {
                            value: '20',
                            label: '20 or more',
                          },
                        ]}
                      />
                    </DisplayIf>
                    <NextButton />
                  </FormLayout>
                </CardBody>
              </Card>
            </FormStep>
            <FormStep name="workspace" title="Workspace">
              <Card>
                <CardBody>
                  <FormLayout>
                    <Field
                      name="name"
                      label="Workspace name"
                      isRequired
                      rules={{ required: 'Please enter a name ' }}
                    />
                    <Field
                      name="url"
                      label="Workspace url"
                      help="We will create one for you if you leave this empty."
                    />
                    <ButtonGroup>
                      <NextButton />
                      <PrevButton />
                    </ButtonGroup>
                  </FormLayout>
                </CardBody>
              </Card>
            </FormStep>
            <FormStep name="invite" title="Invite team">
              <Card>
                <CardBody>
                  <FormLayout>
                    <Field
                      name="emails"
                      label="Invite your teammembers"
                      help="Add multiple addresses by separating them with a comma (,)"
                      type="textarea"
                    />
                    <ButtonGroup>
                      <NextButton />
                      <PrevButton />
                    </ButtonGroup>
                  </FormLayout>
                </CardBody>
              </Card>
            </FormStep>
          </FormStepper>
        </StepForm>
      </VStack>
    </Container>
  )
}
export default OnboardingPage
