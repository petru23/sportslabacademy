'use client'

import LegalPage from '@/components/LegalPage'
import { PRIVACY_POLICY_HTML } from './privacy-content'

export default function PrivacyPolicyPage() {
  return <LegalPage html={PRIVACY_POLICY_HTML} />
}
